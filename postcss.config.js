/** 
 * PostCSS config for Next.js + Tailwind.
 * Using CommonJS so Next/PostCSS reliably pick it up,
 * which ensures Tailwind processes @tailwind and @apply
 * directives in `styles/globals.css`.
 */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
