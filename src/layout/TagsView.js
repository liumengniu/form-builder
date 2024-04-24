/**
 * description： 快捷标签导航
 * @author Kevin
 * @date 2022/11/8
 */
import _ from "lodash"
import { Dropdown, Tabs } from "antd"
import { useDispatch, useSelector } from "react-redux"
import getTagsView from "@redux/reselect/tagsViewSelector"
import { useLocation, useNavigate } from "react-router-dom"
import routers from "@/routers"
import { useEffect } from "react"
import { removeRouter, setCurrentRouter } from "@redux/actions/routerAction"
import { CloseOutlined } from "@ant-design/icons"

function TagsView() {
	const navigate = useNavigate()
	const location = useLocation()
	const dispatch = useDispatch()
	const tags = useSelector(getTagsView)
	let activeKey = _.findIndex(tags, o => o.path === location?.pathname) > 0 ? _.findIndex(tags, o => o.path === location?.pathname) : 0

	useEffect(() => {
		location?.pathname && initTag()
	}, [])

	/**
	 * 初始化标签导航
	 */
	const initTag = () => {
		let pathTag = getItemByPath(routers)
		if (_.isEmpty(pathTag)) {
			return
		}
		let affixList = getAffixTags(routers, []) //获取永远固定的标签
		let payload = _.uniqBy(_.concat([], affixList, [pathTag]), "path")
		dispatch(setCurrentRouter(payload))
	}
	/**
	 * 递归获取固定的tag的值
	 */
	const getAffixTags = (list, affixTags) => {
		_.map(list, o => {
			if (o.children && !_.isEmpty(o.children)) {
				getAffixTags(o.children)
			} else {
				if (o.affix) {
					affixTags.push(o)
				}
			}
		})
		return affixTags
	}
	/**
	 * 根据path获取 routers 数据源的某个route
	 * @param list
	 * @returns {*}
	 */
	const getItemByPath = list => {
		let item
		let pathname = location?.pathname
		for (let i = 0; i < list.length; i++) {
			let o = list[i]
			if (o.children && _.isEmpty(item)) {
				item = getItemByPath(o.children)
				if (!_.isEmpty(item)) {
					break
				}
			} else {
				if (o.path === pathname) {
					item = o
					break
				}
			}
		}
		return item
	}
	/**
	 * 新增标签
	 * @param tagItem
	 */
	const addTag = tagItem => {}
	/**
	 * 移除tag
	 * @param key
	 */
	const removeTag = key => {
		if (key === activeKey) {
			//如果删除的是当前激活页面的标签,前往最后一个标签
			if (key === _.size(tags) - 1) {
				//如果当前激活是最后一个标签,前往第一个固定页标签
				let affixList = getAffixTags(routers, []) //获取永远固定的标签
				let affixUrl = _.get(affixList, `${0}.path`)
				navigate(affixUrl)
			} else {
				let url = _.get(_.last(tags), "path")
				navigate(url)
			}
		}
		let oldTags = _.cloneDeep(tags)
		dispatch(removeRouter(key))
	}

	/**
	 * 刷新页面
	 */
	const refresh = () => {
		window.location.reload()
	}
	/**
	 * 激活某个标签
	 * @param key
	 * @param event
	 */
	const setCurrentTag = (key, event) => {
		let text = event.target.innerText
		// 注意： tabs的点击事件和 下拉菜单Dropdown互斥，Dropdown的（点击/右键点击）事件也会触发 tabs的点击事件
		// event.target.innerText 区分是tab的点击，还是Dropdown的点击
		if (text !== "关闭全部菜单") {
			let url = _.get(tags, `${key}.path`)
			navigate(url)
		}
	}
	/**
	 * 编辑（新增/删除）
	 * @param key
	 * @param action
	 */
	const handleEdit = (key, action) => {
		action === "remove" && removeTag(key)
	}
	/**
	 * 关闭其他标签
	 * @param key
	 */
	const handleCloseOtherTabs = key => {
		let oldTags = _.cloneDeep(tags)
		let url = _.get(oldTags, `${key}.path`)
		navigate(url)
		let affixList = getAffixTags(routers, []) //获取永远固定的标签
		let pathTag = _.filter(oldTags, (o, i) => key === i)
		let payload = _.uniqBy(_.concat([], affixList, pathTag), "path")
		dispatch(setCurrentRouter(payload))
	}
	/**
	 * 关闭全部菜单
	 */
	const handleCloseAllTabs = () => {
		let affixList = getAffixTags(routers, []) //获取永远固定的标签
		let url = _.get(affixList, `${0}.path`) //关闭全部标签，跳转至固定标签列表的第一个固定标签,并且 replace = true，不缓存之前的路由栈
		navigate(url)
		let payload = _.concat([], affixList)
		dispatch(setCurrentRouter(payload))
	}

	/**
	 * tab的items配置
	 * @type {Array}
	 */
	const tabItems = _.map(tags, (o, i) => {
		return {
			closeIcon: o.affix ? <></> : <CloseOutlined />,
			// 注意：menu的值为 items: [],key值必须为 items；
			label: (
				<Dropdown
					menu={{
						items: [
							{ label: "刷新", key: "1", onClick: refresh },
							{ label: "关闭其他菜单", key: "2", onClick: () => handleCloseOtherTabs(i) },
							{ label: "关闭全部菜单", key: "3", onClick: () => handleCloseAllTabs() }
						]
					}}
					trigger={["contextMenu"]}>
					<span>{o.label}</span>
				</Dropdown>
			),
			key: i,
			children: null
		}
	})

	return <Tabs hideAdd onEdit={handleEdit} onTabClick={setCurrentTag} type="editable-card" defaultActiveKey={0} activeKey={activeKey} tabPosition={"top"} items={tabItems} />
}

export default TagsView
