import { Tree } from "@angular-devkit/schematics";
import { SchematicTestRunner } from "@angular-devkit/schematics/testing";
import * as path from "path";

const collectionPath = path.join(__dirname, "../collection.json");

describe("ng-add", () => {
  it("creates config file", () => {
    const runner = new SchematicTestRunner("schematics", collectionPath);
    const options = {
      apiId: "apiId",
      accessToken: "accessToken",
      projectName: "projectName",
      publish: "publish",
      command: "command"
    };
    const tree = runner.runSchematic("ng-add", options, Tree.empty());
    const content = tree.readContent("/netlify.json");

    expect(content).toContain('apiId": "apiId"');
    expect(content).toContain('accessToken": "accessToken"');
    expect(content).toContain('projectName": "projectName"');
    expect(content).toContain('publish": "publish"');
    expect(content).toContain('command": "command"');
  });
});
