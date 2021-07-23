module.exports = {
    // webpack配置
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 清除css，js版本号
            config.output.filename('static/js/[name].[contenthash:6].js').end();
            config.output.chunkFilename('static/js/[name].[contenthash:6].js').end();
            // 为生产环境修改配置...
            config.plugin('extract-css').tap(args => [{
                    filename: `static/css/[name].[contenthash:12].css`,
                    chunkFilename: `static/css/[name].[contenthash:12].css`
                }])
        }
        config.module.rule('images')
        .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
        .use('image-webpack-loader')
        .loader('image-webpack-loader')
        .options(  
             {
          optipng: {
            enabled: false,
          },
          pngquant: {
            quality: [0.5,0.65],
            speed: 4
          },
          gifsicle: {
            interlaced: false,
          },
          // the webp option will enable WEBP
          webp: {
            quality: 50
          }})
  
    },
}
