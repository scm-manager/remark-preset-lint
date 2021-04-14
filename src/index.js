const remarkFrontmatter = require("remark-frontmatter");
const remarkPresetLintRecommended = require("remark-preset-lint-recommended");

const frontmatterLintRule = require("./frontmatter-lint-rule");

module.exports.plugins = [
  [remarkFrontmatter, "yaml"],
  remarkPresetLintRecommended,
  frontmatterLintRule,
  ["remark-lint-list-item-indent", false]
];
