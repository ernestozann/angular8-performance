const { GuessPlugin } = require('guess-webpack');
const { parseRoutes } = require('guess-parser');

module.exports = {
	plugins: [
		new GuessPlugin({
			//id de google analytics
			GA: '201366991',
			runtime: {
				delegate: false
			},
			routeProvider() {
				return parseRoutes('.');
			}
		})
	]
};