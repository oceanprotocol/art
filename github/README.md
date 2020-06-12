# Ocean Protocol GitHub

Use the repo banner to decorate an official Ocean Protocol repository's readme file and follow those points to open source a repo:

- add repo banner
- add LICENSE file, add license block at end of readme
- add badges, like a Travis badge linking to the project on Travis. If repo has been published to package registries, add their badge too. You can use shields.io to get them all from one place

## Basic readme structure

Always start a project's readme file like so, note how the banner is linked to our landing page and sourced remotely from the `art` repo:

```md
[![banner](https://raw.githubusercontent.com/oceanprotocol/art/master/github/repo-banner%402x.png)](https://oceanprotocol.com)

<h1 align="center">repo-name</h1>

> 🐳 Start with emoji, then add a tagline describing your project.

[![npm](https://img.shields.io/npm/v/@oceanprotocol/art.svg)](https://www.npmjs.com/package/@oceanprotocol/art)
```

Which will return:
[![banner](https://raw.githubusercontent.com/oceanprotocol/art/master/github/repo-banner%402x.png)](https://oceanprotocol.com)

<h1 align="center">repo-name</h1>

> 🐳 Start with emoji, then add a tagline describing your project.

[![npm](https://img.shields.io/npm/v/@oceanprotocol/art.svg)](https://www.npmjs.com/package/@oceanprotocol/art)

The tagline in there should always be the same as the repo description on GitHub. With tagline, try to summarize what a user can do with the repo. And most importantly: pick an emoji for your project and put it in front of the tagline.
