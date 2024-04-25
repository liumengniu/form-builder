/**
 * @author Kevin
 * @Date: 2024-4-19
 */
import {Table, Tooltip} from "antd";
import mockData from "@/configs/mock";
import _ from "lodash"

function Schema() {
	/**
	 * 数据源
	 * @type {[{address: string, name: string, key: string, age: number}, {address: string, name: string, key: string, age: number}]}
	 */
	const dataSource = [
		{
			key: '1',
			name: '胡彦斌',
			age: 32,
			address: '西湖区湖底公园1号',
		},
		{
			key: '2',
			name: '胡彦祖',
			age: 42,
			address: '西湖区湖底公园1号',
		},
	];
	const data = _.values(mockData);
	console.log(data, '000000000000000000000000000')
	
	/**
	 * columns
	 */
	const columns = [
		{title: ' 序号', dataIndex: 'no', key: 'no', width: 80, render: (text, record, index) => <span>{index + 1}</span>},
		{title: ' 参数', dataIndex: 'param', key: 'param'},
		{title: '说明', dataIndex: 'label', key: 'label'},
		{title: '类型', dataIndex: 'type', key: 'type'},
		{title: '默认值', dataIndex: 'defaultValue', key: 'defaultValue'},
		{
			title: '选项值',
			dataIndex: 'options',
			key: 'options',
			width: 400,
			ellipsis: {showTitle: false},
			render: record => <Tooltip placement="topLeft" title={JSON.stringify(record)}>{JSON.stringify(record)}</Tooltip>
		},
	];
	
	return (
		<div>
			<Table bordered dataSource={data} columns={columns} rowKey={"id"}/>
		</div>
	)
}

export default Schema
