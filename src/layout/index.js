/**
 * 描述：整体布局组件
 * @author liumengniu
 * @date 2021/12/13
 */
import React, { Fragment, useEffect, useState } from "react"
import { Layout } from "antd"
import TopBar from "@/layout/topbar"
import SideBar from "@/layout/navbar/SideBar"
import TagsView from "@/layout/TagsView"
import ContainerMain from "./content"
import BreadcrumbBox from "@/layout/BreadcrumbBox"
import { useLocation, useNavigate } from "react-router-dom"
import "./index.less"

import theme from "@styles"
import AppConfig from "@/configs"

const { Sider, Header, Content } = Layout

function LayoutContainer() {
	const navigate = useNavigate()
	const location = useLocation()

	const [offsetWidth, setOffsetWidth] = useState(document.querySelector("body").offsetWidth)
	/**
	 * layout的初始化 useEffect
	 */
	useEffect(() => {
		window.addEventListener("resize", () => {
			let width = document.querySelector("body").offsetWidth
			setOffsetWidth(width)
		})
	}, [])

	//原型设计，如果是统计报表，需要隐藏左侧菜单
	let isStatisticalReport = location.pathname === "/home/statistical-report"

	return (
		<Fragment>
			<Layout className="layout-wrap">
				<Header className="layout-header">
					<TopBar />
				</Header>

				<Layout>
					{AppConfig.mode === "side" && (
						<Sider className={offsetWidth < 1366 ? "layout-side" : "layout-side controller-width"} trigger={null} collapsible collapsed={offsetWidth < 1366}>
							<SideBar />
						</Sider>
					)}
					<Content
						className="layout-main"
						style={{ marginLeft: isStatisticalReport || AppConfig.mode === "top" ? 0 : offsetWidth < 1366 ? theme.sideIconWidth : theme.siderWidth }}>
						<div className={"layout-main-container"}>
							{/*<TagsView />*/}
							{/*<BreadcrumbBox />*/}
							<ContainerMain />
						</div>
					</Content>
				</Layout>
			</Layout>
		</Fragment>
	)
}

export default LayoutContainer
