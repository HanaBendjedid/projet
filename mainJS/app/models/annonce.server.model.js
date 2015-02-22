'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Annonce Schema
 */
var AnnonceSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Annonce Description',
		trim: true
	},
    type: {
		type: String,
		default: '',
		required: 'Please fill Annonce type',
		trim: true
	},
    ville: {
		type: String,
		default: '',
		required: 'Please fill Annonce Ville',
		trim: true
	},
    region: {
		type: String,
		default: '',
		required: 'Please fill Annonce Region',
		trim: true
	}, 
	    adresse: {
		type: String,
		default: '',
		required: 'Please fill Annonce Adresse',
		trim: true
	},
        codepostale: {
		type: String,
		default: '',
		required: 'Please fill Annonce Code Postale',
		trim: true
	},
       piece: {
		type: String,
		default: '',
		required: 'Please fill Annonce Piece',
		trim: true
	},
	prix: {
		type: String,
		default: '',
		required: 'Please fill Annonce Prix',
		trim: true
	},
   
	date: {
		type: Date,
		default: '',
		required: 'Please fill Annonce Date',
		trim: true
	},
	
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Annonce', AnnonceSchema);
