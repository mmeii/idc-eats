import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuthContext } from "../../utils/AuthState";

const PrivateRoute = ({ children, ...rest }) => {
	const [state, dispatch] = useAuthContext();
	console.log(state);
	return (
		<Route
			{...rest}
			render={({ location }) =>
				Object.keys(state).length ? (
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
