import { Tree } from "@angular-devkit/schematics";
import { SchematicTestRunner } from "@angular-devkit/schematics/testing";
import * as path from "path";

const collectionPath = path.join(__dirname, "../collection.json");

describe("ng-add", () => {
  it("creates config file", () => {
    const runner = new SchematicTestRunner("schematics", collectionPath);
    const options = {
      publish: "publish",
      command: "command",
      apiId: "apiId",
      accessToken: "accessToken",
      projectName: "projectName"
    };
    const tree = runner.runSchematic("ng-add", options, Tree.empty());
    const netlifyConfig = tree.readContent("/netlify.json");
    const privateConfig = tree.readContent("/netlifyConfig.json");

    expect(netlifyConfig).toContain('publish": "publish"');
    expect(netlifyConfig).toContain('command": "command"');
    expect(privateConfig).toContain('apiId": "apiId"');
    expect(privateConfig).toContain('accessToken": "accessToken"');
    expect(privateConfig).toContain('projectName": "projectName"');
  });
});
