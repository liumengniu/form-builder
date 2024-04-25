/**
 * @author Kevin
 * @Date: 2022-11-7
 */

import {Card, Space} from "antd";
import {useNavigate} from "react-router-dom"

function Home() {
	const navigate = useNavigate();
	
	/**
	 * 路由界面
	 * @param url
	 */
	const navToRouter = url => {
		navigate(url)
	}
	
	return (
		<>
			<Space>
				<Card hoverable style={{width: 300}} onClick={() => navToRouter("/builder")}>
					<p>生成器</p>
				</Card>
				<Card hoverable style={{width: 300}} onClick={() => navToRouter("/schema")}>
					<p>Schema说明</p>
				</Card>
				<Card hoverable style={{width: 300}} onClick={() => navToRouter("/sample")}>
					<p>Schema示例</p>
				</Card>
			</Space>
		</>
	)
}

export default Home
