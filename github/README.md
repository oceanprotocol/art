# Ocean Protocol GitHub

Use the repo banner to decorate an official Ocean Protocol repository's readme file and follow those points to open source a repo:

* add repo banner
* add LICENSE file, add license block at end of readme
* add badges, like a Travis badge linking to the project on Travis. If repo has been published to package registries, add their badge too. You can use shields.io to get them all from one place

## Basic readme structure

Always start a project's readme file like so, note how the banner is linked to our landing page:

```md
[![banner](repo-banner@2x.png)](https://oceanprotocol.com)

<h1 align="center">repo-name</h1>

> 🐳 Start with emoji, then add a tagline describing your project.

[![npm](https://img.shields.io/npm/v/@oceanprotocol/art.svg)](https://www.npmjs.com/package/@oceanprotocol/art)
```

Which will return:
[![banner](repo-banner@2x.png)](https://oceanprotocol.com)

<h1 align="center">repo-name</h1>

> 🐳 Start with emoji, then add a tagline describing your project.

[![npm](https://img.shields.io/npm/v/@oceanprotocol/art.svg)](https://www.npmjs.com/package/@oceanprotocol/art)

The tagline in there should always be the same as the repo description on GitHub. With tagline, try to summarize what a user can do with the repo. And most importantly: pick an emoji for your project and put it in front of the tagline.

### Table of Contents

As soon as you have more than 3 sections in your readme, add a Table of Contents above all content. [toctoc](https://github.com/n1k0/toctoc) is your friend:

1. add this block to yopur readme after the project intro:

    ```md
    ## Table of Contents
    ---
    ```

2. run toctoc:

    ```bash
    toctoc README.md -w
    ```

And make sure to update TOC as you update your readme too.

### Usage

Then immediately start with usage instructions. Goal should be for any dev to be able to get the project running within 1 min. So make it nicely copy/pasteable, don't just say "clone the repo and install dependencies". Write it out, e.g. see in [site repo](https://github.com/oceanprotocol/site/blob/master/README.md#development)

Those first usage instructions should be as short as possible so this implies you have to setup everything in your project to make that possible. E.g. for front end projects everything should be handled behind a simple npm start script.
