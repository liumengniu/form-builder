/**
 * @author Kevin
 * @Date: 2024-4-25
 */
import "./index.less"
import {Button, Form, Result, Space} from "antd";
import locale from "react-json-editor-ajrm/locale/en";
import JSONInput from "react-json-editor-ajrm";
import _ from "lodash";
import mockData from "@/configs/mock";
import BasicComponent from "@comp/modules/BasicModule";
import {useState} from "react";

function Sample() {
	const [data, setData] = useState(_.values(mockData))
	const [error, setError] = useState(false)
	
	const onChange = j => {
		if (j.error) {
			setError(true)
			return
		}
		!_.isEmpty(j?.jsObject) && setData(j?.jsObject)
		if(error){
			setError(false)
		}
	}
	
	return (
		<div className="sample">
			<div className="sample-json">
				<JSONInput
					id='a_unique_id'
					placeholder={data}
					locale={locale}
					height="100%"
					width="100%"
					onChange={onChange}
				/>
			</div>
			<div className="sample-form">
				{
					error ? <Result
						status="500"
						title="格式错误"
						subTitle="schema数据格式错误，请根据schema编辑框顶部提示检查."
					/> : <div className="auto-form-questionnaire-wrapper">
						<Form
							labelCol={{span: 3}}
						>
							{
								data?.map((item, idx) => {
									return (
										<div key={idx} className={`auto-form-questionnaire-wrapper-item`} draggable={true}>
											<BasicComponent idx={idx} item={item}/>
										</div>
									)
								})
							}
						</Form>
					</div>
				}
			</div>
		</div>
	)
}

export default Sample
