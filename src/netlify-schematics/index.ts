import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function netlifySchematics(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    console.log(
      chalk.yellow(
        `\n(。･∀･)ﾉ゛Before running this schematic please make sure you have a
         Netlify account (https://app.netlify.com/signup). Thank you! (´∀｀)♡.\n`
      )
    );
  };
}
