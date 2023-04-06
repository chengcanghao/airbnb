const path = require('path')


const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
  // less

  // webpack
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components"),
      "utilities": resolve("src/utilities"),

    }
  }
}

