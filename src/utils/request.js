/**
 * 描述：服务请求公共方法
 * @author Kevin
 * @date 2021/12/11
 */

import _ from "lodash"
import qs from "qs"
import { message } from "antd"
import TokenManager from "@utils/TokenManager"
import requestError from "@utils/requestError"
const baseUrl = process.env.REACT_APP_BASE_API + ""

const request = {
	/**
	 * 基础请求
	 * @param url
	 * @param options
	 * @returns {Promise<unknown>}
	 */
	request: function (url, options = {}) {
		url = baseUrl + url
		if (!options.method) options.method = "get"
		return new Promise((resolve, reject) => {
			fetch(url, options)
				.then(res => {
					//关闭全局loading
					_.isFunction(options.cb) && options.cb()
					if (options.responseType === "blob") {
						return res.blob()
					}
					if (options.responseType === "arraybuffer") {
						return res.arrayBuffer()
					}
					return res.json()
				})
				.then(data => {
					if (options.responseType === "blob" || options.responseType === "arraybuffer") {
						resolve(data)
					} else if (_.toNumber(data.code) !== 200) {
						message.error(_.get(data, "msg", _.get(data, "errorMsg", _.get(data, "message"))))
						reject(data)
					} else {
						resolve(data)
					}
				})
				.catch(error => {
					requestError(error.code, _.get(error, "msg", _.get(error, "errorMsg", _.get(error, "message"))))
					reject(error)
				})
		})
	},
	/**
	 * get请求
	 * @param url
	 * @param options
	 * @returns {Promise<void>}
	 */
	get: async function (url, options = {}) {
		if (!options.method) {
			options.method = "get"
		}
		url = url + "?" + qs.stringify(options.data, { indices: false }) + "&" + new Date().getTime()
		if (!options.headers) {
			options.headers = { "Content-Type": "application/json" }
		}
		if (TokenManager.getToken()) {
			options.headers["token"] = TokenManager.getToken()
		}
		return this.request(url, options)
	},
	/**
	 * post请求
	 * @param url
	 * @param options
	 * @returns {Promise<void>}
	 */
	post: async function (url, options = {}) {
		if (!options.method) {
			options.method = "post"
		}
		if (options.data instanceof FormData) {
			options.body = options.data
		} else {
			if (_.isEmpty(options.headers)) {
				options.headers = {}
			}
			options.headers["Content-Type"] = "application/json"
			options.body = JSON.stringify(options.data)
		}
		if (TokenManager.getToken()) {
			if (_.isEmpty(options.headers)) {
				options.headers = {}
			}
			options.headers["token"] = TokenManager.getToken()
		}
		return this.request(url, options)
	}
}

export default request
