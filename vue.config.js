module.exports = {
    publicPath: '/CalculadoraNumerica/',

    pwa: {
      name: 'CalculadoraNumerica',
      themeColor: '#1C2135',
      msTileColor: '#1C2135',
      manifestOptions: {
        background_color: '#1C2135'
      }
    },

    chainWebpack: config => {
      config
          .plugin('html')
          .tap(args => {
              args[0].title = 'CalculadoraNumerica';
              return args;
          })
  }
}