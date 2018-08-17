# Neomad's Styleguide

## Installation

`npm install`

To build css for prod
`npm run build`

To build a preview for test
`npm run watch`

Built with [Postcss](Built with postcss: https://www.npmjs.com/package/postcss-cli).

Builds are in `./content/dist/`

## Linter

Linter is propulse by https://stylelint.io/user-guide/rules/

To run the linter
`npm run linter`

To change CSS rule, change `postcss.linter.json`

## Support

To see which support is provide in prod:
Use `npx autoprefixer --info` in project root.

Change staging process according https://cssdb.org/#staging-process

## Organizing CSS properties

To keep every CSS declaration readable, let's follow some rules:

- put spaces at the proper spaces:
```
.my-class {
  property: value;
}
```
- follow the order:
    - Display values (for Flexbox, add children properties after)
    - Positionning value
    - Box values (width, height, margin, padding, border)
