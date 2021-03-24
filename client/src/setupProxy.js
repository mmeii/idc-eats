const createProxyMiddleware = require("http-proxy-middleware");
module.exports = function (app) {
	app.use(
		["/api", "/auth/signup", "/auth/google", "/auth/logout"],
		createProxyMiddleware({
			target: "http://localhost:3001",
		})
	);
};
