import { Tree } from "@angular-devkit/schematics";
import { SchematicTestRunner } from "@angular-devkit/schematics/testing";
import * as path from "path";

const collectionPath = path.join(__dirname, "../collection.json");

describe("ng-add", () => {
  it("creates config file", () => {
    const runner = new SchematicTestRunner("schematics", collectionPath);
    const tree = runner.runSchematic("netlify-schematics", {}, Tree.empty());

    expect(tree.files).toEqual(["/netlify.json"]);
  });
});
