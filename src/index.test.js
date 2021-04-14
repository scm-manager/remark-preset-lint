const path = require("path");
const config = require("./index")
const remark = require("remark");
const { readFileSync } = require("fs");
const remarkLint = require("remark-lint");

const resource = path.join(__dirname, "__resources__");

const linter = remark()
  .use(remarkLint)
  .use(config);

const lint = async file => {
  const result = await linter.process(readFileSync(path.join(resource, file)));
  return result.messages;
};

const expectContains = (results, ...ids) => {
  const ruleIds = results.map(it => it.ruleId);
  ids.forEach(id => expect(ruleIds).toContain(id));
};

describe("should lint markdown", () => {
  it("should output correct errors", async () => {
    const errors = await lint("markdown.md");
    expectContains(errors, "list-item-indent", "no-undefined-references")
  });
});

describe("should lint frontmatter", () => {
  it("should output correct errors", async () => {
    const errors = await lint("frontmatter.md");
    console.log(errors);
    expectContains(errors, "yaml");
  });
});
