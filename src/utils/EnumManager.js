/**
 * description： 枚举的操作方法
 * @author Kevin
 * @date 2022/7/21
 */
import _ from "lodash";

const EnumManager = {
	/**
	 * 获取枚举的label值
	 */
	getLabel: function (enumValues, value) {
		return _.get(
			_.find(enumValues, e => e.value === _.toNumber(value)),
			"label"
		);
	},
	/**
	 * 获取枚举的value值
	 */
	getValue: function (enumValues, value) {
		return _.get(
			_.find(enumValues, e => e.value === _.toNumber(value)),
			"value"
		);
	},
	/**
	 * 获取进行到第几步/第几个状态  的索引
	 * @param enumValues
	 * @param value
	 */
	getStep: function (enumValues, value) {
		return _.findIndex(enumValues, e => e.value === value);
	},
	/**
	 * 付款方式枚举筛分
	 */
	filterPaymentWayEnum: function (enumValues) {
		return _.filter(enumValues, e => e.value !== 2);
	},
	/**
	 * 付款内容枚举筛分
	 * @param enumValues
	 * @param filterKey
	 * @param orderSpecialApprovalLabel
	 */
	filterPaymentTypeEnum: function (enumValues, filterKey, orderSpecialApprovalLabel) {
		console.log(enumValues, filterKey, orderSpecialApprovalLabel);

		if (orderSpecialApprovalLabel === 1) {
			return _.filter(enumValues, e => e.value === 3);
		} else {
			if (filterKey === 10) {
				return _.filter(enumValues, e => e.value !== 2);
			} else if (filterKey === 20) {
				return _.filter(enumValues, e => e.value === 2);
			} else {
				return enumValues;
			}
		}
	}
};

export default EnumManager;
