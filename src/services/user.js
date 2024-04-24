/**
 * description：
 * @author Kevin
 * @date 2022/10/18
 */

import { request } from "@/utils"

/**
 * 密码登录
 * @returns {Promise<*>}
 */
export async function login(data) {
	return request.post("/user/authentication/login", { data })
}
