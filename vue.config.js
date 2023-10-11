const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  filenameHashing: false,
  outputDir: "dist",
  publicPath: "/",
  pages: {
    main: {
      entry: "src/windows/main/index.js",
      template: "src/templates/app.html",
      filename: "windows/index.html",
      title: "App Name",
      chunks: ["chunk-vendors", "chunk-common", "main"]
    },
    background: {
      entry: "src/windows/background/index.js",
      template: "src/templates/app.html",
      filename: "windows/background.html",
      title: "App Name - Background Process",
      chunks: ["chunk-vendors", "chunk-common", "background"]
    }
  },
  configureWebpack: {
    plugins: [
      // copy over the necessary files into the containing directory
      new CopyPlugin({
        patterns: [
          { from: "overwolf/manifest.json", to: "manifest.json" },
          { from: "overwolf/icon.png", to: "icons/icon.png" },
          { from: "overwolf/icon_gray.png", to: "icons/icon_gray.png" },
          { from: "overwolf/icon.ico", to: "icons/icon.ico" }
        ]
      })
    ]
  }
}