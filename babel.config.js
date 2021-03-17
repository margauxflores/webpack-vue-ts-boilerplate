module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: '> 0.25%',
        useBuiltIns: 'usage',
        corejs: 3
      }
    ],
    ['@babel/preset-typescript', { allExtensions: true, isTSX: true }]
  ],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],

    [
      '@babel/proposal-class-properties',
      {
        loose: true
      }
    ]
  ]
};
