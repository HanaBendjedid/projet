'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var annonces = require('../../app/controllers/annonces.server.controller');

	// Annonces Routes
	app.route('/annonces')
		.get(annonces.list)
		.post(users.requiresLogin, annonces.create);

	app.route('/annonces/:annonceId')
		.get(annonces.read)
		.put(users.requiresLogin, annonces.hasAuthorization, annonces.update)
		.delete(users.requiresLogin, annonces.hasAuthorization, annonces.delete);

	// Finish by binding the Annonce middleware
	app.param('annonceId', annonces.annonceByID);
};
