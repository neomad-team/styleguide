# Neomad's Styleguide

## Installation

`npm install`

To build css for prod
`npm run prod`

To work in styleguide (watch included)
`npm run dev`

Built with postcss: https://www.npmjs.com/package/postcss-cli

Builds are in `./content/dist/`

## Linter

Linter is propulse by https://stylelint.io/user-guide/rules/

To change CSS rule, overide it in postcss.config.js features

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

## Source tree

_main.css_: call all css behind
_styleguide.css_: extends *main.css* to this present styleguide

- 00-base:
    - _fonts/_
    - _animation.css_
    - _body.css_
    - _fonts.css_
    - _variables.css_
    
- 01-atoms:
    - _buttons.css_
    - _figures.css_
    - _forms.css_
    - _headings.css_
    - _icons.css_
    - _images.css_
    - _links.css_
    - _lists.css_
    - _time.css_
    
- 02-molecules:
    - _avatar.css_
    - _meta.css_
    - _nav-account.css_
    - _register.css_
    - _socials.css_
    
- 03-components:
    - _footer.css_
    - _header.css_
    - _hero.css_
    - _presentation.css_
    - _preview.css_
    
- 04-templates:
    - _home_
