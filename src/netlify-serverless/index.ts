import { Rule, SchematicContext, SchematicsException, Tree } from '@angular-devkit/schematics'

export function netlifyServerless(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const chalk = require('chalk')

    const pluginTomlInstall = `[[plugins]]\n  package = "@netlify/plugin-angular-serverless`

    if (!tree.exists('/netlify.toml')) {
      tree.create('/netlify.toml', pluginTomlInstall)
      console.log(
        chalk.green(
          'A new netlify.toml config file has been created ＿〆(´∀｀●)'
        )
      )
      return tree
    } else {
      const tomlBuffer = tree.read('netlify.toml')
      if (tomlBuffer != null) {
        const newToml = `${tomlBuffer.toString()}\n${pluginTomlInstall}`
        tree.overwrite('netlify.toml', newToml)
      }
      console.log(
        chalk.green('Your netlify.toml has been amended to install Netlify's Essential Angular Serverless plugin ＿〆(´∀｀●)')
      )
    }

    if (tree.exists('/angular.json')) {
      const angularConfig = tree.read('/angular.json').toString('utf-8')
      const angularJson = JSON.parse(angularConfig)
      const architectConfig = angularJson.projects[angularJson.defaultProject].architect
      architectConfig.serverless = {
        "builder": "@angular-devkit/build-angular:server",
        "options": {
          "outputPath": `dist/netlify-serverless/serverless`,
          // These files will get added by the Essential Angular Serverless plugin
          "main": "serverless.ts",
          "tsConfig": "tsconfig.serverless.json"
        },
        "configurations": {
          "production": {
            "outputHashing": "media",
            "fileReplacements": [
              {
                "replace": "src/environments/environment.ts",
                "with": "src/environments/environment.prod.ts"
              }
            ],
            "sourceMap": false,
            "optimization": true
          }
        }
      }
      tree.overwrite('/angular.json', JSON.stringify(angularJson))
    } else {
      throw new SchematicsException('Missing angular.json');
    }
  }
}
