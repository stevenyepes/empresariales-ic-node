/*
 * empresariales-ic-node
 * https://github.com/jadiosa/empresariales-ic-node
 *
 * Copyright (c) 2015 jonathan diosa
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function() {
  return 'awesome';
};

exports.sayhello = function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
  	res.end('Hello World\n');
};