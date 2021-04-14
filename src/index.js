module.exports.plugins = [
  [require("remark-frontmatter"), "yaml"],
  require("remark-preset-lint-recommended"),
  require("./frontmatter-lint-rule"),
  ["remark-lint-list-item-indent", false]
];
