module.exports = {
  plugins: [
    ["source-map-support"],
    [
      "@babel/plugin-proposal-decorators",
      {
        decoratorsBeforeExport: true,
      },
    ],
    ["@babel/plugin-proposal-class-properties"],
    ["@babel/plugin-proposal-optional-chaining"],
    ['@babel/plugin-transform-typescript'],
    ['@babel/plugin-proposal-private-methods']
  ],
  presets: [
    [
      "@babel/preset-env",
      { modules: "commonjs", targets: { node: "current" } },
    ],
    "@babel/preset-typescript",
    "@babel/preset-flow"
  ],
};
