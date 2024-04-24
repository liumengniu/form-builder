/**
 * description：
 * @author Kevin
 * @date 2022/6/7
 */
import {Button} from "antd";
import _ from "lodash"

function ThButton(props){
	/**
	 * handleClick
	 */
	const handleClick = _.throttle(() => {
		_.isFunction(props.onClick) && props.onClick();
	})
	
	return (
		<Button {...props} onClick={handleClick}>{props.title}</Button>
	)
}

export default ThButton
