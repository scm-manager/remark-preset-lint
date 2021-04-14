/*
 * MIT License
 *
 * Copyright (c) 2020-present Cloudogu GmbH and Contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const path = require("path");
const remark = require("remark");
const { readFileSync } = require("fs");
const remarkLint = require("remark-lint");
const config = require("./index");

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
    expectContains(errors, "list-item-indent", "no-undefined-references");
  });
});

describe("should lint frontmatter", () => {
  it("should output correct errors", async () => {
    const errors = await lint("frontmatter.md");
    console.log(errors);
    expectContains(errors, "yaml");
  });
});
