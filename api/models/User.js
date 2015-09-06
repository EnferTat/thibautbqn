/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	pseudo: {
  		type: 'alphanumeric',
  		require: true,
  		minLength: 3,
  		maxLength: 32
  	},

  	email: {
  		type: 'email',
  		require: false
  	},

  	status: {
  		type: 'integer',
  		max: 99
  	},

  	role: {
  		type: 'integer',
  		max: 99
  	},

  	mdp: {
  		type: 'alphanumeric',
  		require: true
  	},

  	deletedAt: {
  		type: 'datetime'
  	}
  }
};

