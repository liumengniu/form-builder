/**
 * description：
 * @author Kevin
 * @date 2024/3/16
 * Last edited on: 2024/3/16
 */
import {v4 as uuidV4} from 'uuid'

const mockData = {
	// 表单组件
	1: {
		id: uuidV4(),
		type: 'radio',
		label: "单选",
		options: [
			{id: 1, label: '答案1', value: '答案1'},
			{id: 2, label: '答案2', value: '答案2'},
			{id: 3, label: '答案3', value: '答案3'}
		],
		name: "",
		defaultValue: "",
		placeholder: "",
	},
	2: {
		id: uuidV4(),
		type: 'checkbox',
		label: "多选",
		options: [
			{id: 1, label: '唱', value: '唱'},
			{id: 2, label: '跳', value: '跳'},
			{id: 3, label: 'rap', value: 'rap'},
			{id: 4, label: '篮球', value: '篮球'}
		],
		name: "",
		defaultValue: "",
		placeholder: "",
	},
	3: {
		id: uuidV4(),
		type: 'input',
		label: "文本输入",
		name: "",
		defaultValue: "",
		placeholder: "",
		variant: "",
	},
	4: {
		id: uuidV4(),
		type: 'inputNumber',
		label: "数字输入",
		name: "",
		defaultValue: "",
		placeholder: "",
		step: "",
		prefix: ''
	},
	5: {
		id: uuidV4(),
		type: 'textarea',
		label: "多行文本",
		name: "",
		defaultValue: "",
		placeholder: "",
	},
	6: {
		id: uuidV4(),
		type: 'datepicker',
		label: "日期选择",
		name: "",
		defaultValue: "",
		placeholder: "",
	},
	7: {
		id: uuidV4(),
		type: 'timepicker',
		label: "时间选择",
		name: "",
		defaultValue: "",
		placeholder: "",
	},
	8: {
		id: uuidV4(),
		type: 'rate',
		label: "评分",
		name: "",
		defaultValue: "",
		placeholder: "",
		allowHalf: false,
	},
	9: {
		id: uuidV4(),
		type: 'slider',
		label: "滑块",
		name: "",
		defaultValue: "",
		placeholder: "",
		range: false,
		inputNumber: true,
	},
	10: {
		id: uuidV4(),
		type: 'switch',
		label: "开关",
		name: "",
		defaultValue: "",
		placeholder: "",
		checkedChildren: '',
		unCheckedChildren: ''
	},
	11: {
		id: uuidV4(),
		type: 'select',
		label: "下拉框",
		name: "",
		defaultValue: "",
		placeholder: "",
		options: [
			{id: 1, label: '唱', value: '唱'},
			{id: 2, label: '跳', value: '跳'},
			{id: 3, label: 'rap', value: 'rap'},
			{id: 4, label: '篮球', value: '篮球'}
		],
	},
	12: {
		id: uuidV4(),
		type: 'upload',
		label: "上传组件",
		name: "",
		defaultValue: "",
		placeholder: "",
	},
	
	
	// 常用表单
	101:{
		isTemplate: true,
		id: uuidV4(),
		type: 'loginForm',
		label: "登录表单",
		formOptions: [
			{id: uuidV4(), type: 'input', label: "账号", defaultValue: "请输入账号"},
			{id: uuidV4(), type: 'input', label: "密码", defaultValue: "请输入密码"},
		]
	},
	102:{
		isTemplate: true,
		id: uuidV4(),
		type: 'userForm',
		label: "个人信息",
		formOptions: [
			{id: uuidV4(), type: 'input', name: 'name', label: "用户名", defaultValue: "请输入用户名"},
			{id: uuidV4(), type: 'input', name: 'email', label: "邮箱", defaultValue: "请输邮箱"},
			{id: uuidV4(),
				type: 'radio',
				label: "性别",
				options: [
					{id: 1, label: '男', value: '男'},
					{id: 2, label: '女', value: '女'},
					{id: 3, label: '其他', value: '其他'}
				],
				name: "sex",
				defaultValue: "",
				placeholder: "",
			},
			{id: uuidV4(), type: 'input', label: "地址", name: "address", defaultValue: "", placeholder: "",},
			{id: uuidV4(), type: 'input', label: "电话号码", name: "phone", defaultValue: "", placeholder: "",},
			{id: uuidV4(), type: 'textarea', label: "兴趣爱好", name: "hobby", defaultValue: "", placeholder: "",},
		]
	},
	103: {
		isTemplate: true,
		id: uuidV4(),
		type: 'listForm',
		label: "个人信息",
		formOptions: [
			{id: uuidV4(),
				type: 'radio',
				label: "性别",
				options: [
					{id: 1, label: '男', value: '男'},
					{id: 2, label: '女', value: '女'},
					{id: 3, label: '其他', value: '其他'}
				],
				name: "sex",
				defaultValue: "",
				placeholder: "",
			},
		]
	},
}

export default mockData

