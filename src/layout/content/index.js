/**
 * @author liumengniu
 * @Date: 2021-12-13
 */

import React, { Fragment, useEffect, useState } from "react"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import routers from "@/routers"
import _ from "lodash"
import { useSelector } from "react-redux"
import { getRole } from "@redux/reselect/appSelector"
import { Affix, Button, Drawer } from "antd"
import { SettingOutlined } from "@ant-design/icons"
import { ThWatermark } from "@comp/water-mask"

/**
 * 渲染底层路由
 * @param route
 * @returns {JSX.Element}
 */
const renderRoute = route => <Route key={route.path} exact path={route.path} element={<div style={{ boxSizing: "border-box" }}>{route.element}</div>} />

// todo 下面的代码时有权限判断的，后期再用下面的
// const renderRoute = route =>
//   <Route key={route.path} exact path={route.path} element={
//     <RequirePermission {...route} key={route.path}>
//         <div style={{ background: "#fff", padding: "20px", boxSizing: "border-box" }}>
//           {route.element}
//         </div>
//     </RequirePermission>
//   } />

/**
 * 渲染次级路由
 * @param routes
 */
const renderRoutes = routes =>
	routes.map(r => {
		if (!_.isEmpty(r.children)) {
			return renderRoutes(r.children)
		} else {
			return renderRoute(r)
		}
	})
/**
 * 页面权限判断方法
 * @param children
 * @param authority
 * @returns {JSX.Element|*}
 * @constructor
 */
const RequirePermission = ({ children, authority }) => {
	let location = useLocation()
	const role = useSelector(getRole)

	if (_.isEmpty(authority) || !_.includes(authority, role)) {
		return <Navigate to="/403" state={{ from: location }} />
	}
	return children
}

function ContainerMain() {
	useEffect(() => {
		ThWatermark("IKUN", "170", "400", "-20", "#333", "20", ".15")
	}, [])

	const [visible, setVisible] = useState(false)
	/**
	 * 显示右侧配置弹框
	 */
	const showDrawer = () => setVisible(true)
	/**
	 * 关闭右侧配置弹框
	 */
	const onClose = () => setVisible(false)

	return (
		<>
			<Routes>{renderRoutes(routers)}</Routes>
			<Affix offsetTop={120} style={{ position: "absolute", top: 500, right: 10 }} onChange={affixed => console.log(affixed)}>
				<Button type="primary" icon={<SettingOutlined />} onClick={showDrawer} />
			</Affix>
			<Drawer title="项目配置" placement="right" onClose={onClose} open={visible}>
				<div className={"setting-group"}>
					<span>预留配置</span>
				</div>
			</Drawer>
		</>
	)
}

export default ContainerMain
