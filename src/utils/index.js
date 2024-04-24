/**
 * description：工具类入口
 * @author Kevin
 * @date 2022/6/15
 */
import { message } from "antd"
import _ from "lodash"
import moment from "moment"
import TokenManager from "@utils/TokenManager"

const utils = {
	/**
	 * 判断值是不是一个json数据
	 * @param str
	 */
	isJson: function (str) {
		if (typeof str == "string") {
			try {
				let obj = JSON.parse(str)
				if (typeof obj == "object" && obj) {
					return true
				} else {
					return false
				}
			} catch (e) {
				return false
			}
		}
	},
	/**
	 * 是否是 base64
	 * @param str
	 * @returns {boolean}
	 */
	isBase64: function (str) {
		if (str === "" || str.trim() === "") {
			return false
		}
		try {
			return btoa(atob(str)) == str
		} catch (err) {
			return false
		}
	},
	/**
	 * check token expiration
	 * @returns {boolean}
	 */
	isExpiration: function () {
		let time = TokenManager.getExpirationTime()
		return moment(_.toNumber(moment().format("X"))).isAfter(moment(_.toNumber(time)))
	},
	/**
	 * 操作成功
	 * @param res
	 */
	showSuccess: function (res) {
		message.success(_.get(res, "msg", "操作成功"))
	},

	/**
	 * 操作失败
	 * @param res
	 */
	showFail(res) {
		message.error(_.get(res, "msg", "操作失败"))
	},
	/**
	 * 通用下载方法
	 * @param blob
	 * @returns {Promise<void>}
	 */
	downLoadCommon: async function (blob) {
		let a_link = document.createElement("a")
		a_link.href = URL.createObjectURL(blob)
		a_link.download = name //下载的文件的名字
		document.body.appendChild(a_link)
		a_link.click()
		URL.revokeObjectURL(a_link.href)
	},
	/**
	 * 获取浏览器默认语言
	 */
	getBrowserLang: function () {
		let browserLang = navigator.language ? navigator.language : navigator.browserLanguage
		let defaultBrowserLang = ""
		if (browserLang.toLowerCase() === "us" || browserLang.toLowerCase() === "en" || browserLang.toLowerCase() === "en_us") {
			defaultBrowserLang = "en_US"
		} else {
			defaultBrowserLang = "zh_CN"
		}
		return defaultBrowserLang
	}
}

export default utils
