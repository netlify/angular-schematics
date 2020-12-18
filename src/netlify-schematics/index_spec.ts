import { Tree } from "@angular-devkit/schematics";
import { SchematicTestRunner } from "@angular-devkit/schematics/testing";
import * as path from "path";

const collectionPath = path.join(__dirname, "../collection.json");

describe("ng-add", () => {
  const runner = new SchematicTestRunner("schematics", collectionPath);

  it("creates netlify config file", () => {
    const options = {
      publish: "publish",
      command: "command",
    };
    const tree = runner.runSchematic("ng-add", options, Tree.empty());
    const netlifyConfig = tree.readContent("/netlify.toml");

    expect(netlifyConfig).toContain('publish = "publish"');
    expect(netlifyConfig).toContain('command = "command"');
  });
  