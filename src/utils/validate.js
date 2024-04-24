/**
 * description：
 * @author Kevin
 * @date 2022/10/18
 */
import _ from "lodash"
import { message } from "antd"

// 校验价格   小数位不超过六位的正数
const validatePrice = async (rule, value, callback) => {
	let reg = /^(([0-9]|([1-9][0-9]{0,200}))((\.[0-9]{1,6})?))$/
	if (!value) {
		return Promise.reject("This field is required")
	}
	if (reg.test(value)) {
		return Promise.resolve("")
	} else {
		return Promise.reject("Please enter a positive number with no more than six decimal places")
	}
}

//valid upload assets
const validUploadAsset = (type, size) => {
	let formatList = ["jpg", "jpeg", "png", "gif", "mp4", "mp3"]
	let fileType = _.last(_.split(type, "/"))
	let isAllowFileFormat = _.includes(formatList, fileType)
	if (!isAllowFileFormat) {
		message.error("Drag and drop the file into the box to upload Supported formats: JPG, PNG, JPEG, GIF, MP4, MP3, GLB, GLTF")
		return isAllowFileFormat
	}
	const isLt120M = size / 1024 / 1024 < 120
	if (!isLt120M) {
		message.error("Drag and drop the file into the box to upload Supported formats: JPG, PNG, JPEG, GIF, MP4, MP3, GLB, GLTF")
		return isLt120M
	}
	return true
}

export { validUploadAsset, validatePrice }
