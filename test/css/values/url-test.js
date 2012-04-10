"use strict";
var util = require('./util');

exports.batch = util.makeVows('url', {
	'url( "asdf" )': {
		'tokens': ['URL'],
		'toString': 'url( "asdf" )',
		'unparsed': [],
		'warnings': []
	},
	'url(http://more.peanut.butter/)': {
		'tokens': ['URL'],
		'toString': 'url(http://more.peanut.butter/)',
		'unparsed': [],
		'warnings': []
	},
	'url ("blah")': {
		'tokens': ['IDENT', 'S', 'CHAR', 'STRING', 'PAREN_CLOSE'],
		'toString': null,
		'unparsed': ['IDENT', 'S', 'CHAR', 'STRING', 'PAREN_CLOSE'],
		'warnings': null
	},
	// inherit is not valid
	'inherit': {
		'tokens': ['IDENT'],
		'toString': null,
		'unparsed': ['IDENT'],
		'warnings': null
	},
	'invalidValue': {
		'tokens': ['IDENT'],
		'toString': null,
		'unparsed': ['IDENT'],
		'warnings': null
	}
});