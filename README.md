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

- 00-base:
    - _body.css: base for html_
    - _fonts.css: import of fonts_
    - _variables.css: list all variables_
    
- 01-atoms:
    - _buttons.css_
    - _figures.css_
    - _forms.css_
    - _headings.css_
    - _images.css_
    - _links.css_
    - _lists.css_
