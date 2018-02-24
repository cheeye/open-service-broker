'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    app.log.info('Open Service Broker (OSB) REST API started at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      app.log.info('Explore OSB API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Specify boot scripts which must be launched in a particular order
let bootOptions = {
  appRootDir: __dirname,
  bootScripts: ["./boot/logger.js"]
}

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, bootOptions, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  // if (require.main === module)
    app.start();
});
