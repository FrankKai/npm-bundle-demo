const path = require("path");

module.exports = {
  mode: 'none',
  entry: {
    "index.cjs": {
      import: './src/index.js',
      library: {
        type: 'commonjs2',
      },

    },
    "index.esm": {
      import: './src/index.js',
      library: {
        type: 'module',
      },
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
    clean: true,
  },
  experiments: {
    outputModule: true
  }
};
