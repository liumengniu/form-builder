import { Avatar, Dropdown, Menu } from "antd"
import logo2 from "@/statics/images/common/logo2.png"
import React, { useState } from "react"

/**
 * description：顶部导航
 * @author Kevin
 * @date 2022/11/8
 */
import "./index.less"
import { useLocation, useNavigate } from "react-router-dom"
import TokenManager from "@utils/TokenManager"
import _ from "lodash"
import routers from "@/routers"
import { addRouter } from "@redux/actions/routerAction"
import { useDispatch, useSelector } from "react-redux"
import getTagsView from "@redux/reselect/tagsViewSelector"
import AppConfig from "@/configs"
import RouterManager from "@utils/RouterManager"

function TopBar() {
	const location = useLocation()
	const dispatch = useDispatch()
	const navigate = useNavigate()

	/**
	 * 前往首页
	 */
	const navToHome = () => navigate("/", { replace: true })

	/**
	 * 点击最底层菜单栏
	 * @param item
	 * @param key
	 * @param keyPath
	 * @param selectedKeys
	 * @param domEvent
	 */
	const onSelect = ({ item, key, keyPath, selectedKeys, domEvent }) => {
		navigate(key)
		let realPath = key || location?.pathname
		let payload = RouterManager.getItemByPath(routers, realPath)
		dispatch(addRouter(payload))
	}

	/**
	 * 退出登录
	 */
	const logout = () => {
		TokenManager.removeToken()
		navigate("/login")
	}

	/**
	 * 用户下拉菜单
	 * @type {[{label: string, key: string},{label: string, key: string},{onClick: logout, label: string, key: string}]}
	 */
	const items = [
		{ label: "预留功能1", key: "item-1" },
		{ label: "预留功能2", key: "item-2" },
		{ label: "退出登录", key: "item-3", onClick: logout }
	]

	return (
		<div className="HeaderMain">
			<div className="HeaderLeft" onClick={navToHome}>
				<Avatar shape="square" src={logo2} />
				<span>Uniapp Builder</span>
			</div>
			<div className="HeaderMiddle">{AppConfig.mode === "top" && <Menu onSelect={onSelect} mode="horizontal" items={RouterManager.getItems(routers)} />}</div>
			<div className="HeaderRight">
				<Dropdown menu={{ items }} placement="bottomRight">
					<div>
						<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
						<span>IKUN</span>
					</div>
				</Dropdown>
			</div>
		</div>
	)
}

export default TopBar
