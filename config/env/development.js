/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

	url: 'http://localhost:9002',
	port: 9002,
	google: {
		clientID: '744915257573-ri8suktjsu5s1b3jddkacm6k0a45vi02.apps.googleusercontent.com',
		clientSecret: 'Gm4OujzY9YLyFUWYeaNE-o48'
	}

	/***************************************************************************
	 * Set the default database connection for models in the development       *
	 * environment (see config/connections.js and config/models.js )           *
	 ***************************************************************************/

	//models: {
	//   connection: 'mongo'
	//}

};
