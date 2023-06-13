const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    // proxy: 'http://pve.lycoris.site:9780'
    proxy: {
      '/dairy': {
        target:'http://pve.lycoris.site:9780',
        changeOrigin: true,
      }
    }
  }
})
