// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
	build: {
		env: require('./prod.env'),
		index: path.resolve(__dirname, '../dist/index.html'),
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		productionSourceMap: false,
		// Gzip off by default as many popular static hosts such as
		// Surge or Netlify already gzip all static assets for you.
		// Before setting to `true`, make sure to:
		// npm install --save-dev compression-webpack-plugin
		productionGzip: false,
		productionGzipExtensions: ['js', 'css'],
		port: 9000
	},
	dev: {
		env: require('./dev.env'),
		port: 8088,
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {
			// 单级路径 多级路径代理失败
			'/auction': {
				target: 'http://47.94.131.157:8080',
				changeOrigin: true,		// 开启跨域
				pathRewrite: {
      				'^/auction/': '/auction/'
    			}
			},
			'/api': {
				target: 'http://127.0.0.1:3001',
				changeOrigin: true
			}
		},
		// CSS Sourcemaps off by default because relative paths are "buggy"
		// with this option, according to the CSS-Loader README
		// (https://github.com/webpack/css-loader#sourcemaps)
		// In our experience, they generally work as expected,
		// just be aware of this issue when enabling this option.
		cssSourceMap: false
	}
}
