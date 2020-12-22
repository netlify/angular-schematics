import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function netlifySchematics(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const netlifyConfigData = `
      [build]\n  publish = "${options.publish}"\n
      command = "${options.command}"\n[[redirects]]\n 
      from="/*"\n  to="/index.html"\n  status=200
    `;

    tree.create('/netlify.toml', netlifyConfigData);

    return tree;
  };
}
