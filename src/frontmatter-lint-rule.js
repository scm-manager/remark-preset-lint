const rule = require("unified-lint-rule");
const visit = require("unist-util-visit");
const generated = require("unist-util-generated");
const yaml = require("js-yaml");

function frontmatterLintRule(ast, file) {
  visit(ast, "yaml", node => {
    if (!generated(node)) {
      try {
        yaml.load(node.value);
      } catch (err) {
        file.message(err, node);
      }
    }
  });
}

module.exports = rule("remark-lint:yaml", frontmatterLintRule);
