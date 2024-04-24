/**
 * @author Kevin
 * @Date: 2022-11-7
 */

import {Card, Space} from "antd";
import {useNavigate} from "react-router-dom"

function Home() {
	const navigate = useNavigate();
	
	/**
	 * 编辑界面
	 * @type {{navigate(), "/builder"}}
	 */
	const navToBuilder = () => {
		navigate("/builder")
	}
	
	return (
		<>
			<Space>
				<Card hoverable style={{width: 300}} onClick={navToBuilder}>
					<p>生成器</p>
				</Card>
				<Card hoverable style={{width: 300}}>
					<p>Schema说明</p>
				</Card>
			</Space>
		</>
	)
}

export default Home
