import { Outlet } from "react-router-dom";

function AuthLayout() {
	return (
		<div className="h-svh">
			<Outlet />
		</div>
	);
}

export default AuthLayout;
