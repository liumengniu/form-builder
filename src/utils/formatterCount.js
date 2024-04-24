/**
 * 描述：计算数量缩进
 * @author liumengniu
 * @date 2022/2/15
 */
import _ from "lodash"

export function formatterCount(count){
	if(_.isString(count)){
		count = _.toNumber(count);
	}
	if (count === 0) return "0 K";
	let k = 1000; //设定基础货币换算比例
	let currencyStr = ['','K','M','G','T','P','E','Z', 'Y']; //容量单位
	let i = 0; //单位下标和次幂
	for(let l=0;l<8;l++){
		if(count / Math.pow(k, l) < 1){
			break;
		}
		i = l;
	}
	return `${(count / _.round(Math.pow(k, i)))} ${currencyStr[i]}`;
}
