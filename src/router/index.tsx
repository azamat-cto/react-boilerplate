import { createBrowserRouter, Navigate } from "react-router-dom";
import GeneralError from "@/pages/errors/general-error";
import NotFoundError from "@/pages/errors/not-found-error";
import { withAuth } from "@/router/protected";

export const router = createBrowserRouter([
	{
		path: "/",
		lazy: async () => {
			const Layout = await import("../layouts/root");
			return {
				Component: withAuth(Layout.default, {
					isProtected: true,
					loginPath: "/auth/login",
					homePath: "/",
				}),
			};
		},
		errorElement: <GeneralError />,
		children: [
			{
				index: true,
				lazy: async () => {
					const Dashboard = await import("../pages/dashboard");
					return {
						Component: withAuth(Dashboard.default, {
							isProtected: true,
							loginPath: "/auth/login",
							homePath: "/",
						}),
					};
				},
			},
		],
	},
	{
		path: "/auth",
		lazy: async () => {
			const Auth = await import("../layouts/auth");
			return { Component: Auth.default };
		},
		errorElement: <GeneralError />,
		children: [
			{
				index: true,
				element: <Navigate to="/auth/login" />,
			},
			{
				path: "login",
				lazy: async () => {
					const Login = await import("../pages/auth/login");
					return {
						Component: withAuth(Login.default, {
							isProtected: false,
							loginPath: "/auth/login",
							homePath: "/",
						}),
					};
				},
			},
		],
	},
	{
		path: "*",
		Component: NotFoundError,
	},
]);
