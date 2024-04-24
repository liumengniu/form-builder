import "./App.css"
import "antd/dist/reset.css"
import "@styles/mixin.css"
import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"
import TokenManager from "@utils/TokenManager"
import LayoutContainer from "@/layout"
import NoFoundPage from "@views/other/no-found-page"
import NoAuthorityPage from "@views/other/no-authority-page"
import Login from "@views/login"

function RequireAuth({ children }) {
	let location = useLocation()
	let token = TokenManager.getToken()
	if (_.isEmpty(token)) {
		return <Navigate to="/login" state={{ from: location }} />
	}

	return children
}

function App() {
	return (
		<div className="App">
			<HashRouter>
				<Routes>
					<Route
						path="/*"
						exact={true}
						element={
							<RequireAuth>
								<LayoutContainer />
							</RequireAuth>
						}
					/>
					<Route path="login" element={<Login />} />
					<Route path="404" element={<NoFoundPage />} />
					<Route path="403" element={<NoAuthorityPage />} />
				</Routes>
			</HashRouter>
		</div>
	)
}

export default App
