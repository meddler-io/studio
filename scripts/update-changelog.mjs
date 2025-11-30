import { execSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync, appendFileSync } from "node:fs";

function safeExec(cmd) {
  try {
    return execSync(cmd, { encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

function getLastCommit() {
  const sha = safeExec("git rev-parse HEAD");
  const subject = safeExec("git log -1 --pretty=%s");
  const body = safeExec("git log -1 --pretty=%b");
  const date = safeExec("git log -1 --date=short --pretty=%ad");

  if (!sha || !subject) {
    return null;
  }

  return { sha, subject, body, date };
}

function ensureHeader(content) {
  if (!content.startsWith("# Changelog")) {
    return `# Changelog\n\n${content}`;
  }
  return content;
}

function main() {
  const commit = getLastCommit();
  if (!commit) {
    process.exit(0);
  }

  const { sha, subject, body, date } = commit;
  const shortSha = sha.slice(0, 7);

  let entry = `## ${date || "Unreleased"}\n`;
  entry += `- ${subject} (${shortSha})\n`;

  if (body) {
    const cleanedBody = body
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => `  - ${line}`)
      .join("\n");

    if (cleanedBody) {
      entry += `${cleanedBody}\n`;
    }
  }

  const changelogPath = "CHANGELOG.md";

  if (!existsSync(changelogPath)) {
    // Create new file with header and first entry
    const content = `# Changelog\n\n${entry}\n`;
    writeFileSync(changelogPath, content, "utf8");
    return;
  }

  // Append entry at the end
  let existing = readFileSync(changelogPath, "utf8");
  existing = ensureHeader(existing);

  // Simple duplication guard: if this exact shortSha already exists, skip
  if (existing.includes(`(${shortSha})`)) {
    return;
  }

  const finalContent = `${existing.trimEnd()}\n\n${entry}\n`;
  writeFileSync(changelogPath, finalContent, "utf8");
}

main();
