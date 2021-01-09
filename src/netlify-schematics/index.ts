import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function netlifySchematics(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const netlifyConfigData = `[build]\n  publish = "${options.publish}"\n command = "${options.command}"\n[[redirects]]\n from="/*"\n  to="/index.html"\n  status=200`;
    const chalk = require('chalk');
    const execa = require('execa');

    console.log(
      chalk.yellow(
        '\n(。･∀･)ﾉ゛If you do not currently have a Netlify account, please head to https://app.netlify.com/signup before running the netlify-schematics (´∀｀)♡.\n'
      )
    );

    execa('netlify', ['login']).stdout.pipe(process.stdout);

    if (!tree.exists('/netlify.toml')) {
      tree.create('/netlify.toml', netlifyConfigData);
      console.log(
        chalk.green(
          'A new netlify.toml config file has been created ＿〆(´∀｀●)'
        )
      );
      return tree;
    }

    if (options.tomlExists === 'amend') {
      let tomlBuffer = tree.read('netlify.toml');
      if (tomlBuffer !== null) {
        let newToml = `${tomlBuffer.toString()}\n${netlifyConfigData}`;
        tree.overwrite('netlify.toml', newToml);
        console.log(
          chalk.green('Your netlify.toml has been amended ＿〆(´∀｀●)')
        );
      }
      return tree;
    }

    if (options.tomlExists === 'overwrite') {
      tree.overwrite('netlify.toml', netlifyConfigData);
      console.log(
        chalk.green('Your netlify.toml has been overwritten ＿〆(´∀｀●)')
      );
      return tree;
    }
  };
}
