module.exports = (ctx) => ({

  plugins: {
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
