/*
 * Copyright (c) 2020 - present Cloudogu GmbH
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see https://www.gnu.org/licenses/.
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
