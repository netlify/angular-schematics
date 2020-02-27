import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

export function netlifySchematics(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const configData = {
      apiId: options.apiId,
      accessToken: options.accessToken,
      projectName: options.projectName,
      publish: options.publish,
      command: options.command
    };

    tree.create("/netlify.json", JSON.stringify(configData, null, 2));
    return tree;
  };
}
