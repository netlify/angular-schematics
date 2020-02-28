import { Tree } from "@angular-devkit/schematics";
import { SchematicTestRunner } from "@angular-devkit/schematics/testing";
import * as path from "path";

const collectionPath = path.join(__dirname, "../collection.json");

describe("ng-add", () => {
  const runner = new SchematicTestRunner("schematics", collectionPath);

  it("creates netlify config file", () => {
    const options = {
      publish: "publish",
      command: "command"
    };
    const tree = runner.runSchematic("ng-add", options, Tree.empty());
    const netlifyConfig = tree.readContent("/netlify.json");

    expect(netlifyConfig).toContain('publish": "publish"');
    expect(netlifyConfig).toContain('command": "command"');
  });

  it("creates private netlify config file", () => {
    const options = {
      apiId: "apiId",
      accessToken: "accessToken",
      projectName: "projectName"
    };
    const tree = runner.runSchematic("ng-add", options, Tree.empty());
    const privateConfig = tree.readContent("/netlifyConfig.json");

    expect(privateConfig).toContain('apiId": "apiId"');
    expect(privateConfig).toContain('accessToken": "accessToken"');
    expect(privateConfig).toContain('projectName": "projectName"');
  });

  it("adds private config to gitignore", () => {
    const tree = runner.runSchematic("ng-add", {}, Tree.empty());
    const gitignore = tree.readContent("/.gitignore");

    expect(gitignore).toContain("netlifyConfig.json");
  });
});
