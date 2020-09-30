module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@layouts': './src/layouts',
            '@utils': './src/utils',
            '@typesdir': './src/types',
            '@styles': './src/styles',
            '@actions': './src/actions',
            '@reducers': './src/reducers',
            '@store': './src/store',
          },
        },
      ],
    ],
  };
};
