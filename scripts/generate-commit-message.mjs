import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { basename } from "node:path";

function safeExec(cmd) {
  try {
    return execSync(cmd, { encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

function detectType(files) {
  const joined = files.join(" ");

  if (/\b(sections|components|app\/page|constants\/site)\b/.test(joined)) {
    return "feat";
  }
  if (/\b(styles|tailwind|postcss|ui\/|design)\b/.test(joined)) {
    return "style";
  }
  if (/\b(eslint|tsconfig|config|\.github|workflow)\b/.test(joined)) {
    return "chore";
  }
  if (/\b(package\.json|package-lock\.json)\b/.test(joined)) {
    return "chore";
  }
  if (/\b(test|spec|__tests__)\b/.test(joined)) {
    return "test";
  }
  return "chore";
}

function buildSummary(files) {
  if (files.length === 0) return "update project";

  const names = files.slice(0, 4).map((f) => {
    const base = basename(f);
    return base.replace(/\.[^/.]+$/, "");
  });

  if (names.length === 1) {
    return `update ${names[0]}`;
  }

  const head = names.slice(0, 3).join(", ");
  if (files.length > 3) {
    return `update ${head} and more`;
  }
  return `update ${head}`;
}

function generateBody(diffStat) {
  if (!diffStat) return "";

  const header = "Summary of changes:\n";
  const lines = diffStat
    .split("\n")
    .filter((l) => l && !l.startsWith(" ")) // skip summary line
    .map((l) => `- ${l.trim()}`);

  if (lines.length === 0) return "";
  return `${header}${lines.join("\n")}\n`;
}

function main() {
  const commitMsgFile = process.argv[2];
  if (!commitMsgFile) {
    process.exit(0);
  }

  // If user already wrote a real message (not just comments), do not overwrite.
  let existing = "";
  try {
    existing = readFileSync(commitMsgFile, "utf8");
  } catch {
    existing = "";
  }

  const hasRealContent = existing
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#")).length > 0;

  if (hasRealContent) {
    process.exit(0);
  }

  const diffFilesRaw = safeExec("git diff --cached --name-only");
  if (!diffFilesRaw) {
    process.exit(0);
  }

  const files = diffFilesRaw
    .split("\n")
    .map((f) => f.trim())
    .filter(Boolean);

  const type = detectType(files);
  const summary = buildSummary(files);
  const subject = `${type}: ${summary}`;

  const diffStat = safeExec("git diff --cached --stat");
  const body = generateBody(diffStat);

  const autoNote =
    "\n\n# Commit message generated automatically from staged changes.\n" +
    "# Edit this message before saving if you want to tweak it.\n";

  const finalMessage = `${subject}\n\n${body}${autoNote}`;

  try {
    writeFileSync(commitMsgFile, finalMessage, "utf8");
  } catch {
    // If writing fails, silently exit so git fallbacks to empty/previous message.
  }
}

main();
