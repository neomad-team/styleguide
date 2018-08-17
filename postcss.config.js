module.exports = (ctx) => ({

  plugins: {
    'stylelint': {
      'extends': './postcss.linter.json',
      'rules': {
        'at-rule-empty-line-before': null
      }
    },
    'precss': {},
    'postcss-pxtorem': {},
    'postcss-custom-properties': {
      preserve: ctx.env === 'dev'
    },
    'postcss-preset-env': {
      stage: 2,
      features: {
        'nesting-rules': true,
        'color-mod-function': {
          unresolved: 'warn'
        }
      },
      browsers: 'defaults',
      autoprefixer: {
        add: ctx.env === 'prod'
      }
    },
    'postcss-discard-duplicates': {},
    'cssnano': ctx.env === 'prod'
  }
})
