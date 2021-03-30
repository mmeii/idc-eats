import React, { createContext, useReducer, useContext } from "react";

const AuthContext = createContext();

const { Provider } = AuthContext;

function reducer(state, action) {
	switch (action.type) {
		case "signin":
			return action.payload;
		case "signout":
			return null;
		default:
			return state;
	}
}

function AuthProvider({ value = null, ...props }) {
	const [state, dispatch] = useReducer(reducer, []);

	return <Provider value={[state, dispatch]} {...props} />;
}

function useAuthContext() {
	return useContext(AuthContext);
}

export { AuthProvider, useAuthContext };
