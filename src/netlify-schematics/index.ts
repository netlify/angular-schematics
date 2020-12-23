import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function netlifySchematics(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const chalk = require('chalk');
    const netlifyConfigData = `[build]\n  publish = "${options.publish}"\n command = "${options.command}"\n[[redirects]]\n from="/*"\n  to="/index.html"\n  status=200`;

    if (!tree.exists('/netlify.toml')) {
      tree.create('/netlify.toml', netlifyConfigData);
      console.log(
        chalk.green('The netlify.toml config file has been created ＿〆(´∀｀●)')
      );
      return tree;
    }

    console.log(chalk.bgRed('（ﾉ´д｀）A netlify.toml already exists.'));
  };
}
