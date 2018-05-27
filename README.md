# Neomad's Styleguide

## Installation

No Installation required.

## TODO

Find a linter.

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
_styleguide.css_: style only use to present styleguide

- 00-base:
    - _fonts/_
    - _body.css_
    - _fonts.css_
    - _variables.css_
    - _fontawesome.css_
    
- 01-atoms:
    - _buttons.css_
    - _figures.css_
    - _forms.css_
    - _headings.css_
    - _images.css_
    - _links.css_
    - _lists.css_
    - _time.css_
    
  - 02-molecules:
    - _avatar.css_
    - _nav-account.css_
    - _meta.css_
    
  - 03-components:
    - _header.css_
    - _footer.css_
    
  - 04-templates:
    - _home_
