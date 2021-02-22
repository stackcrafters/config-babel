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
