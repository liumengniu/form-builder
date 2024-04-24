/**
 * description：水印组件
 * @author Kevin
 * @date 2022/11/10
 */
import AppConfig from "@/configs"

export function ThWatermark(CON, H, W, R, C, S, O) {
	// 判断水印是否存在，如果存在，那么不执行
	if (document.getElementById("tp-watermark") != null) {
		return
	}
	let TpLine = parseInt(document.body.clientWidth / W) * 2 // 一行显示几列
	let StrLine = ""
	for (let i = 0; i < TpLine; i++) {
		StrLine +=
			'<span style="display: inline-block; line-height:' +
			H +
			"px; width:" +
			W +
			"px; text-align: center; transform:rotate(" +
			R +
			"deg); color:" +
			C +
			"; font-size:" +
			S +
			"px; opacity:" +
			O +
			';">' +
			CON +
			"</span>"
	}
	let DivLine = document.createElement("div")
	DivLine.innerHTML = StrLine

	let TpColumn = parseInt(document.body.clientHeight / H) * 2 // 一列显示几行
	let StrColumn = ""
	for (let i = 0; i < TpColumn; i++) {
		StrColumn += '<div style="white-space: nowrap;">' + DivLine.innerHTML + "</div>"
	}
	let DivLayer = document.createElement("div")
	DivLayer.innerHTML = StrColumn
	DivLayer.id = "th-watermark" // 给水印盒子添加类名
	DivLayer.style.position = "fixed"
	DivLayer.style.top = "0px" // 整体水印距离顶部距离
	DivLayer.style.left = AppConfig.mode === "side" ? "50px" : "-100px" // 改变整体水印的left值
	DivLayer.style.zIndex = "99999" // 水印页面层级
	DivLayer.style.pointerEvents = "none"

	document.body.appendChild(DivLayer) // 到页面中
}

export function RemoveTpWatermark() {
	// 判断水印是否存在，如果存在，那么执行
	if (document.getElementById("th-watermark") == null) {
		return
	}
	document.body.removeChild(document.getElementById("th-watermark"))
}
