/**
 * 描述：登录界面
 * @author liumengniu
 * @date 2021/12/14
 */
import styled from "styled-components"
import { Button, Checkbox, Form, Input } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"

import loginBg from "@statics/images/common/loginBg.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TokenManager from "@utils/TokenManager"

function Login({ className }) {
	const navigate = useNavigate()
	const [username, setUserName] = useState("admin")
	const [password, setPassword] = useState("123456")

	const onFinish = async values => {
		TokenManager.setToken("test token")
		navigate("/")
	}

	const onValuesChange = (changedValues, allValues) => {}

	return (
		<div className={className}>
			<div className={"box"}>
				<div className={"title"}>Form Builder</div>
				<div className={"subTitle"}>Form Builder - x</div>
				<Form name="normal_login" className="login-form" onFinish={onFinish} onValuesChange={onValuesChange}>
					<Form.Item name="userName" initialValue={"admin"} rules={[{ required: true, message: "请输入用户名" }]}>
						<Input
							size={"large"}
							prefix={<UserOutlined className="site-form-item-icon" />}
							placeholder="请输入用户名"
							value={username}
							onChange={e => setUserName(e.target.value)}
						/>
					</Form.Item>
					<Form.Item name="password" initialValue={"123456"} rules={[{ required: true, message: "请输入登录密码" }]}>
						<Input
							size={"large"}
							prefix={<LockOutlined className="site-form-item-icon" />}
							type="password"
							placeholder="请输入登录密码"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</Form.Item>
					<Form.Item className={"form-item-between"}>
						<Form.Item name="remember" valuePropName="checked" noStyle>
							<Checkbox>自动登录</Checkbox>
						</Form.Item>

						<a className="login-form-forgot" href="">
							忘记密码
						</a>
					</Form.Item>

					<Form.Item>
						<Button block type="primary" htmlType="submit" className="login-form-button">
							登录
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	)
}

export default styled(Login)`
	padding: 50px;
	box-sizing: border-box;
	margin: 0 auto;
	height: 100vh;
	background: url(${loginBg}) no-repeat bottom left;
	background-size: 100% 60%;
	display: flex;
	align-items: center;

	.box {
		margin: 0 auto;
		max-width: 377px;
		.title {
			font-size: 42px;
			font-weight: 600;
			text-align: left;
			color: #20253a;
			line-height: 59px;
		}
		.subTitle {
			font-size: 20px;
			font-weight: 500;
			text-align: left;
			color: #a2a7ab;
			line-height: 28px;
			letter-spacing: 11px;
		}

		.login-form {
			margin-top: 70px;
			.form-item-between .ant-form-item-control-input-content {
				display: flex;
				justify-content: space-between;
			}
		}
	}
`
