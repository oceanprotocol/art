[![art](github/repo-banner@2x.png)](https://oceanprotocol.com)

<h1 align="center">art</h1>

> 🐬 Ocean Protocol's brand assets for community distribution.

[![npm](https://img.shields.io/npm/v/@oceanprotocol/art.svg)](https://www.npmjs.com/package/@oceanprotocol/art)

All assets in this repo can also be viewed and downloaded from [oceanprotocol.com/art](https://oceanprotocol.com/art). You'll find a living style guide there too.

- [Brand Assets](#brand-assets)
- [Usage](#usage)
- [Typography](#typography)
- [License](#license)

---

## Brand Assets

- [Logo](logo/)
- [Banner](banner/)
- [Waves](waves/)
- [Creatures](creatures/)
- [GitHub](github/)

## Usage

It's encouraged to use this repo as a dependency within your projects to keep the assets in sync.

The whole repo is published as a npm module so just run for installation:

```bash
npm i @oceanprotocol/art
```

Then in your app, you can import the required assets:

```jsx
import logo from '@oceanprotocol/art/logo/logo.svg'

function MyComponent() {
  return <img src={logo} />
}
```

## Typography

Our branding typefaces are [Sharp Sans Medium/Bold](https://sharptype.co/typefaces/sharp-sans/#features) in use as body text, and [Sharp Sans Display No. 1 Bold](https://sharptype.co/typefaces/sharp-sans-display-no1/) for headings.

Those are commercial fonts and the license doesn't allow us to distribute them. Hence you won't find them in this repository. If you're a member of the Ocean Protocol team, ask a designer to hand you the font files.

If you only need them for use on the web, you can grab them from inside the private `site` repo's [fonts folder](https://github.com/oceanprotocol/site/tree/master/src/global/fonts).

## License

All assets are licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).
