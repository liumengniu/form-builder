/**
 * @author Kevin
 * @Date: 2024-4-25
 */
import "./index.less"
import {Form, Space} from "antd";
import locale from "react-json-editor-ajrm/locale/en";
import JSONInput from "react-json-editor-ajrm";
import _ from "lodash";
import mockData from "@/configs/mock";
import BasicComponent from "@comp/modules/BasicModule";

function Sample() {
	const data = _.values(mockData);
	
	return (
		<div className="sample">
			<div className="sample-json">
				<JSONInput
					id='a_unique_id'
					placeholder={data}
					locale={locale}
					height="100%"
					width="100%"
				/>
			</div>
			<div className="sample-form">
				<div className="auto-form-questionnaire-wrapper">
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
			</div>
		</div>
	)
}

export default Sample
