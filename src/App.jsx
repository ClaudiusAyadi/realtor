import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Account from "./pages/Account";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Offers from "./pages/Offers";
import SignUp from "./pages/SignUp";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/account"
						element={<Account />}
					/>
					<Route
						path="/forgot-password"
						element={<ForgotPassword />}
					/>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/offers"
						element={<Offers />}
					/>
					<Route
						path="/signup"
						element={<SignUp />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
