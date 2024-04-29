/**
 * @author Kevin
 * @Date: 2024-4-29
 */

import "./index.less"
import {Form, Result} from "antd";
import _ from "lodash";
import mockData from "@/configs/mock";
import BasicComponent from "@comp/modules/BasicModule";
import {useEffect, useState} from "react";
import { JSONEditor } from 'vanilla-jsoneditor/standalone.js'

function JsonEditor() {
	const [data, setData] = useState(_.filter(_.values(mockData), o=> !o.isTemplate))
	const [error, setError] = useState(false)
	
	useEffect(()=>{
		initEditor()
	}, [])
	
	/**
	 * 编辑schema
	 * @param updatedContent
	 * @param previousContent
	 * @param contentErrors
	 * @param patchResult
	 */
	const handleChange = (updatedContent, previousContent, { contentErrors, patchResult }) =>{
		if (contentErrors) {
			setError(true)
			return
		}
		!_.isEmpty(updatedContent?.text) && setData(JSON.parse(updatedContent?.text))
		if(error){
			setError(false)
		}
		console.log('onChange', { updatedContent, previousContent, contentErrors, patchResult })
		console.log(JSON.parse(updatedContent?.text))
	}
	
	/**
	 * 初始化编辑器
	 */
	const initEditor = () =>{
		let content = {
			text: undefined,
			json: data
		}
		
		const editor = new JSONEditor({
			target: document.getElementById('jsoneditor'),
			props: {
				content: { json: data },
				onChange:handleChange
			}
		})
	}
	
	return (
		<div className="sample">
			<div className="sample-json">
				<div id="jsoneditor" />
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

export default JsonEditor
