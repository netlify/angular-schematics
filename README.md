# Netlify Schematics for Angular ✨

## Note: This project is under development and not yet offically supported.

Our schematics help you deploy Angular to Netlify.

## Table of Contents

- [Angular Universal](#angular-universal)

## Angular Universal

For now, this schematic will generate a [Netlify configuration file](https://docs.netlify.com/configure-builds/file-based-configuration/) (`netlify.toml`) that will help aid in the deployment process. The schematic  will install our Essential Angular Serverless plugin via `netlify.toml`, which was built specifically for supporting Angular Universal on Netlify.

## Installation

To add these schematics simply run the following command in your Angular project:

```bash
ng add netlify-schematics
```

Then run:

```bash
ng generate netlify-schematics:angular-serverless
```
