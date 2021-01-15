# 💙 Netlify Schematics for Angular ✨

This project exists to help you integrate Netlify into your Angular project and make your development process a little bit easier ♥.

> o(\*ﾟ ∇ ﾟ)ﾉ Here are two important steps to get started

1. Sign up for a Netlify account if you don't have one already: [https://app.netlify.com/signup](https://app.netlify.com/signup)

2. Install the Netlify CLI globally:
   `npm install netlify-cli -g`

## What These Schematics (currently) Do

For now, this schematic will generate a [Netlify configuration file](https://docs.netlify.com/configure-builds/file-based-configuration/?utm_source=project-repo&utm_medium=netlify-schematics_tzm&utm_campaign=devex) (`netlify.toml`) that will help aid in the deployment process and it will log you in to Netlify. Then you can run [Netlify CLI](https://docs.netlify.com/cli/get-started/?utm_source=project-repo&utm_medium=netlify-schematics_tzm&utm_campaign=devex) commands like:

`netlify init`: which will set your project up in Netlify and set up CI/CD if your project has a git repo
`netlify deploy`: to manually deploy your project
`netlify open`: that will open your projects' Netlify dashboard

## Adding Netlify Schematics

To add these schematics simply run the following command in your Angular project:

```bash
ng add netlify-schematics
```

You'll be prompted to add a few bits of information:

- [project's build command](https://docs.netlify.com/configure-builds/get-started/#definitions?utm_source=project-repo&utm_medium=netlify-schematics_tzm&utm_campaign=devex): for Angular projects this is usually `ng build` or for production `ng build --prod`.
- [directory of your build project](https://docs.netlify.com/configure-builds/get-started/#definitions?utm_source=project-repo&utm_medium=netlify-schematics_tzm&utm_campaign=devex): when you run your build command where does the built project live (for Angular it's `/dist/<project name>` for Angular + [Scully](https://github.com/scullyio/scully/blob/master/README.md) prerender it's `dist/static`)
- amend or overwrite?: in case you already have a `netlify.toml` file you can choose to either amend the build command and project directory or overwrite the whole file.

> 🚨 Please Note: If you amend but already have these properties it will cause an error. Also, none of these properties are required to make the file. If you do not add them the file will still be generated, but will have blank spots where your answers would be.

## Cool, cool, cool?

Want to add anything? [Be my guest](https://github.com/tzmanics/netlify-schematics/blob/master/CONTRIBUTING.md)! Have any questions? Those go [here](https://github.com/tzmanics/netlify-schematics/issues) or feel free to reach out on [Twitter](http://twitter.com/tzmanics). Hope this helps, happy coding! 👩🏻‍💻

![toshmagosh coding schematics](https://github.com/tzmanics/deploy-for-dogs/blob/master/images/toshi-01.gif?raw=true)
