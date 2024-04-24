/**
 * 描述：IDE相关配置
 * @author liumengniu
 * @date 2021/12/14
 */
'use strict'
const path = require('path')

module.exports = {
	context: path.resolve(__dirname, './'),
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'@': path.resolve('src'),
			'@statics': path.resolve(__dirname, 'src/statics'),
			'@views': path.resolve(__dirname, 'src/views'),
			'@comp': path.resolve(__dirname, 'src/components'),
			'@services': path.resolve(__dirname, 'src/services'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@redux': path.resolve(__dirname, 'src/redux'),
      '@styles': path.resolve(__dirname, 'src/styles'),
		}
	}
}
