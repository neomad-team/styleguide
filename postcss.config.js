module.exports = (ctx) => ({

  plugins: {
    'stylelint': {
      'extends': 'stylelint-config-standard',
      'rules': {
        'declaration-colon-space-after': 'always',
        'indentation': 'tab',
        'max-empty-lines': 2,
        'unit-whitelist': ['rem', '%', 's']
      }
    },
    'precss': {},
    'postcss-preset-env': {
      stage: 2,
      features: {
        'nesting-rules': true
      },
      browsers: 'defaults',
      autoprefixer: {
        add: ctx.env === 'prod'
      }
    },
    'cssnano': ctx.env === 'prod'
  }
})
