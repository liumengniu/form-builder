/**
 * 描述： 路由配置入口
 * @author liumengniu
 * @date 2022/1/19
 */
import {
	PicLeftOutlined,
	RollbackOutlined,
	BorderOuterOutlined,
	RiseOutlined,
	DingdingOutlined,
	AlignCenterOutlined,
	AntCloudOutlined,
	SlackOutlined
} from "@ant-design/icons"
import Home from "@views/home";
import Builder from "@views/builder";
import Schema from "@views/schema";

const routers = [
	{
		label: "首页",
		path: "/",
		icon: <PicLeftOutlined />,
		element: <Home /> ,
		affix: true
	},
	{
		label: "组件编辑器",
		path: "/builder",
		icon: <BorderOuterOutlined />,
		element: <Builder />
	},
	{
		label: "schema说明",
		path: "/schema",
		icon: <RollbackOutlined />,
		element: <Schema />
	},
]

export default routers
