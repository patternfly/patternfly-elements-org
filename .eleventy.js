let compress = require("compression");
let markdownIt = require("markdown-it");
let markdownItAnchor = require("markdown-it-anchor");
let markdownItContainer = require("markdown-it-container");

module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "html",
    "md",
    "css",
    "js",
    "svg"
  ]);

  eleventyConfig.setBrowserSyncConfig({
    server: {
      baseDir: "./_site",
      middleware: [compress()]
    }
  });

  eleventyConfig.addWatchTarget("**/*.css");
  eleventyConfig.addPassthroughCopy("node_modules/@patternfly/**/*");

  let options = { html: true };
  let markdownLib = markdownIt(options);
  markdownLib.use(markdownItAnchor);
  markdownLib.use(markdownItContainer, "section", {
    validate: params => {
      return params.trim().match(/^section+(.*)$/);
    },
    render: (tokens, idx) => {
      let m = tokens[idx].info.trim().match(/^section+(.*)$/);
      let color = m && m[1].trim() === "header" ? "" : "lightest";
      let size = m && m[1].trim() === "header" ? "" : "small";

      if (tokens[idx].nesting === 1) {
        return `<pfe-band pfe-size="${size}" pfe-color="${color}">`
      } else {
        return `</pfe-band>\n`;
      }
    }
  });

  eleventyConfig.setLibrary("md", markdownLib);
};