import _ from "lodash";

/**
 * description：
 * @author Kevin
 * @date 2022/11/1
 */

const Formatter ={
	/**
	 * 格式化容量存储
	 */
	formatterStorage: function (size){
		if(!size){
			return "0";
		}
		if(_.isString(size)){
			size = _.toNumber(size);
		}
		if (size === 0) return "0";
		let k = 1024; //Set the base currency conversion ratio
		let currencyStr = ['','KB','MB','GB','TB','PB','EB','ZB', 'YB']; //容量单位
		let i = 0; //Unit subscripts and powers
		for(let l=0;l<8;l++){
			if(size / Math.pow(k, l) < 1){
				break;
			}
			i = l;
		}
		return `${ _.round(size / _.round(Math.pow(k, i)),2)} ${currencyStr[i]}`;
	},
	/**
	 * 计算百分比例(分母为10G)
	 */
	getRadio: function (size, total=10*1024*1024*1024){
		if(!size){
			return "0";
		}
		if(_.isString(size)){
			size = _.toNumber(size);
		}
		return _.round(size/total, 4);
	}
}

export default Formatter
