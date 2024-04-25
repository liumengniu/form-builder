/**
 * 基础展示组件
 * @author Kevin
 * @Date: 2024-4-11
 */
import {Form, Radio, Checkbox, DatePicker, Input, InputNumber, Rate, Slider, Switch, TimePicker} from "antd";

const CheckboxGroup = Checkbox.Group;
const {TextArea} = Input

function BasicComponent(props) {
	const {changedValues, item} = props
	const {type, label, defaultValue, name, placeholder} = item;
	
	const ExhibitComponent = () => {
		if (type === "radio") {
			return (
				<Radio.Group>
					<Radio value={1}>唱</Radio>
					<Radio value={2}>跳</Radio>
					<Radio value={3}>rap</Radio>
					<Radio value={4}>篮球</Radio>
				</Radio.Group>
			)
		} else if (type === "checkbox") {
			return <CheckboxGroup options={['唱', '跳', 'rap', '篮球']}/>
		} else if (type === "input") {
			return <Input placeholder="请输入内容" disabled={true}/>
		} else if (type === 'inputNumber') {
			return <InputNumber min={1} max={10} defaultValue={3} style={{width: "100%"}} disabled={true}/>
		} else if (type === 'textarea') {
			return <TextArea showCount maxLength={100} placeholder="请输入内容" disabled={true}/>
		} else if (type === 'datepicker') {
			return <DatePicker disabled={true}/>
		} else if (type === 'timepicker') {
			return <TimePicker/>
		} else if (type === 'rate') {
			return <Rate disabled={true}/>
		} else if (type === "slider") {
			return <Slider defaultValue={30} disabled={true}/>
		} else if (type === "switch") {
			return <div><Switch defaultChecked/></div>
		}
	}
	
	return (
		<div className="item-content">
			<Form.Item label={label} name={name} initialValue={defaultValue} placeholder={placeholder}>
				<ExhibitComponent/>
			</Form.Item>
		</div>
	)
}

export default BasicComponent;
