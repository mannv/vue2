module.exports = {
  runtimeCompiler: true,
  devServer: {
    proxy: process.env.API_URL,
  },
}
