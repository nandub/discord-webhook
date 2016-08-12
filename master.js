/* https://devcenter.heroku.com/articles/node-best-practices */

var forky = require('forky');
var path = require('path');
var config = require('./config');

forky({path: path.join(__dirname, '/worker.js'), workers: config.web.workers});
