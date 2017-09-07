# Neomad's Styleguide

## Installation

Install node dependencies:

```
npm install
```

## TODO

- Building instructions
- Methodology

## Organizing CSS properties

To keep every CSS declaration readable, let's follow some rules _(TODO: find a linter)_

- put spaces at the proper spaces
        <pre>
            .my-class {
                property: value
            }
        </pre>
- follow the order
    - Display values (for Flexbox, add children properties after)
    - Positionning value
    - Box values (width, height, margin, padding, border)


## Source tree

- 00-base:
    - _variables.css: list all variables
    - __mixins.css: could be added there_
- 01-atoms:
    -
