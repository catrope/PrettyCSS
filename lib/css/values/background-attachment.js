/* background-attachment
 *
 * CSS1:  <attachment>
 * CSS3:  [ <attachment> , ]* <attachment>
 */

var attachment = require('./attachment');
var base = require('./base');
var util = require('../../util');
var validate = require('./validate');

var BackgroundAttachment = base.baseConstructor();

util.extend(BackgroundAttachment.prototype, base.base, {
	name: "background-attachment"
});


exports.parse = function (unparsedReal, parser, container) {
	var ba = new BackgroundAttachment(parser, container, unparsedReal);
	ba.debug('parse', unparsedReal);
	ba.repeatParser(attachment);

	if (ba.list.length < 1) {
		ba.debug('parse fail');
		return null;
	}

	if (ba.list.length > 1) {
		(validate.minimumCss())(3);
		ba.warnIfInherit();
	}

	ba.debug('parse success', ba.unparsed);
	return ba;
};