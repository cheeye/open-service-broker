'use strict';
const bunyan = require('bunyan');

module.exports = function(app) {
  // create an application-wide logging handler
  app.log = bunyan.createLogger({name:'common-broker'});
  app.log.info("Connected Bunyan logger");
};
