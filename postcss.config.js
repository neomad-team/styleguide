module.exports = ctx => ({

  plugins: {
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
