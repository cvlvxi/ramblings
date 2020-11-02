module.exports = {
  publicPath: ".",
  outputDir: "docs",
  // configureWebpack: {
  //   optimization: {
  //     splitChunks: false
  //   }
  // },
  chainWebpack(config){
    config.optimization.delete('splitChunks')
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  }
};
