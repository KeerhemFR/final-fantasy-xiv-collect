module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // ... other configs, if any
      [
        'module-resolver',
        {
          extensions: [
            '.ios.js',
            '.android.js',
            '.ios.jsx',
            '.android.jsx',
            '.js',
            '.jsx',
            '.json',
            '.ts',
            '.tsx',
          ],
          root: ['./src'],
          alias: {
            '@screens': './src/screens',
            '@interfaces': './src/interfaces',
            '@api': './src/api',
            '@hooks': './src/hooks',
            '@components': './src/components',
            '@contents': './src/contents',
            '@styles': './src/styles',
          },
        },
      ],
    ],
  };
};
