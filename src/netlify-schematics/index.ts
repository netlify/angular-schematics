import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

export function netlifySchematics(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const configData = {
      apiId: "",
      accessToken: "",
      projectName: "",
      publish: "",
      command: ""
    };

    tree.create("/netlify.json", JSON.stringify(configData, null, 2));
    return tree;
  };
}
