import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

export function netlifySchematics(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const netlifyConfigData = {
      build: {
        publish: options.publish,
        command: options.command
      }
    };
    const privateNetlifyConfigData = {
      apiId: options.apiId,
      accessToken: options.accessToken,
      projectName: options.projectName
    };

    tree.create("/netlify.json", JSON.stringify(netlifyConfigData, null, 2));
    tree.create(
      "/netlifyConfig.json",
      JSON.stringify(privateNetlifyConfigData, null, 2)
    );

    if (tree.exists("/.gitignore")) {
      let gitIgnoreBuffer = tree.read("/.gitignore");
      if (gitIgnoreBuffer != null) {
        let newGitIgnore = `${gitIgnoreBuffer.toString()}\nnetlifyConfig.json`;
        tree.overwrite("/.gitignore", newGitIgnore);
      }
    } else {
      tree.create("/.gitignore", "netlifyConfig.json");
    }
    return tree;
  };
}
