import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { Provider } from "react-redux"
import store from "@/redux/stores"
import utils from "@utils"
//antd 中文包
import { ConfigProvider } from "antd"
import zh_CN from "antd/lib/locale/zh_CN"
import en_US from "antd/lib/locale/en_US"
import "moment/locale/zh-cn"

//判断浏览器语言（JS无法判断系统语言）
let lan
let defaultBrowserLang = utils.getBrowserLang()
if (defaultBrowserLang === "zh_CN") {
	lan = zh_CN
} else {
	lan = en_US
}

ReactDOM.render(
	<Provider store={store}>
		<ConfigProvider
			locale={lan}
			theme={{
				token: {
					colorPrimary: "#00b96b"
				}
			}}>
			<App />
		</ConfigProvider>
	</Provider>,
	document.getElementById("root")
)

reportWebVitals()
