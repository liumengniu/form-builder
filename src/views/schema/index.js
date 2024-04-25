/**
 * @author Kevin
 * @Date: 2024-4-19
 */
import {Space, Table, Tooltip} from "antd";
import mockData from "@/configs/mock";
import _ from "lodash"

function Schema() {
	/**
	 * 数据源
	 * @type {unknown[]}
	 */
	const data = _.values(mockData);
	
	/**
	 * columns
	 */
	const columns = [
		{title: ' 序号', dataIndex: 'no', key: 'no', width: 80, render: (text, record, index) => <span>{index + 1}</span>},
		{title: '组件名称', dataIndex: 'label', key: 'label'},
		{title: '类型', dataIndex: 'type', key: 'type'},
		{title: '默认值', dataIndex: 'defaultValue', key: 'defaultValue'},
		{title: '提示词', dataIndex: 'placeholder', key: 'placeholder'},
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
		<Space>
			<Table bordered dataSource={data} columns={columns} rowKey={"id"}/>
		</Space>
	)
}

export default Schema
