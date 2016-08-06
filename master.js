/* https://devcenter.heroku.com/articles/node-best-practices */

var forky = require('forky');
var config = require('./config');

forky({path: __dirname + '/worker.js', workers: config.web.workers});
