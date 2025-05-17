module.exports = {
  plugins: [
    require('@tailwindcss/postcss'), // ✅ NEW — don’t point to "tailwindcss"
    require('autoprefixer'),
  ],
};
// NOTE: This is a wrapper for the Tailwind CSS PostCSS plugin.
// NOTE: It is not required to use this wrapper, but it is recommended for
// NOTE: better compatibility with other PostCSS plugins.
// NOTE: You can also use the Tailwind CSS CLI to process your CSS files.
// NOTE: See the Tailwind CSS documentation for more information:
// NOTE: https://tailwindcss.com/docs/installation#using-postcss
// NOTE: https://tailwindcss.com/docs/installation#using-the-cli
// NOTE: https://tailwindcss.com/docs/installation#using-the-cli-with-postcss
// NOTE: https://tailwindcss.com/docs/installation#using-the-cli-with-postcss-and-autoprefixer
// NOTE: https://tailwindcss.com/docs/installation#using-the-cli-with-postcss-and-autoprefixer-and-postcss-import