# 💙 Netlify Schematics for Angular ✨

This project exists to help you integrate Netlify into your Angular project and make your development process a little bit easier ♥.

## What These Schematics (currently) Do

For now, this schematic will generate a [Netlify configuration file](https://docs.netlify.com/configure-builds/file-based-configuration/?utm_source=project-repo&utm_medium=netlify-schematics_tzm&utm_campaign=devex) (`netlify.toml`) that will help aid in the deployment process and help you skip a few inputs if you're using the [Netlify CLI](https://docs.netlify.com/cli/get-started/?utm_source=project-repo&utm_medium=netlify-schematics_tzm&utm_campaign=devex).

## Adding Netlify Schematics

To add these schematics simply run the following command in your Angular project:

```bash
ng add netlify-schematics
```

You'll be prompted to add a few bits of information:

- [project's build command](https://docs.netlify.com/configure-builds/get-started/#definitions?utm_source=project-repo&utm_medium=netlify-schematics_tzm&utm_campaign=devex): for Angular projects this is usually `ng build` or for production `ng build --prod`.
- [directory of your build project](https://docs.netlify.com/configure-builds/get-started/#definitions?utm_source=project-repo&utm_medium=netlify-schematics_tzm&utm_campaign=devex): when you run your build command where does the built project live (for Angular it's `/dist/<project name>` for Angular + [Scully](https://github.com/scullyio/scully/blob/master/README.md) prerender it's `dist/static`)

![netlify schematics output](https://res.cloudinary.com/dzkoxrsdj/image/upload/v1584591508/Screen_Shot_2020-03-19_at_12.16.51_AM_gztmit.jpg)

> 📝 Note: none of these properties are required if you do not add them the two files will still be generated, but they will have blank spots where your answers would be.

## Cool, cool, cool?

Want to add anything? [Be my guest](https://github.com/tzmanics/netlify-schematics/blob/master/CONTRIBUTING.md)! Have any questions? Those go [here](https://github.com/tzmanics/netlify-schematics/issues) or feel free to reach out on [Twitter](http://twitter.com/tzmanics). Hope this helps, happy coding! 👩🏻‍💻

![toshmagosh coding schematics](https://github.com/tzmanics/deploy-for-dogs/blob/master/images/toshi-01.gif?raw=true)
