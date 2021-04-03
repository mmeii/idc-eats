import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				Object.keys(window.user).length ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
