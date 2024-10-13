import type { ComponentType, FC } from "react";
import { Navigate, useLocation } from "react-router-dom";

type WrappedComponentProps = Record<string, unknown>;
type WrappedComponentType = ComponentType<WrappedComponentProps>;
type WithAuthOptions = {
	isProtected: boolean;
	loginPath: string;
	homePath: string;
};

export const withAuth = <P extends WrappedComponentProps>(
	Component: WrappedComponentType,
	options: WithAuthOptions,
): FC<P> => {
	const AuthWrapper: FC<P> = (props) => {
		const isAuthenticated = true;
		const location = useLocation();
		if (options.isProtected && !isAuthenticated) {
			return (
				<Navigate to={options.loginPath} state={{ from: location }} replace />
			);
		}

		if (
			!options.isProtected &&
			isAuthenticated &&
			location.pathname === options.loginPath
		) {
			return (
				<Navigate to={options.homePath} state={{ from: location }} replace />
			);
		}

		return <Component {...props} />;
	};

	AuthWrapper.displayName = `AuthWrapper(${Component.displayName || Component.name || "Component"})`;

	return AuthWrapper;
};
