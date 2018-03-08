module.exports = function(Catalog) {

/**
 * get the catalog of services that the service broker offers
 * @param {string} X_Broker_API_Version version number of the Service Broker API that the Platform will use
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Catalog} result Result object
 */
Catalog.get = function(X_Broker_API_Version, callback) {
  const app = Catalog.app;
  app.log.debug("Catalog requested")

  let Service = app.models.Service;
  Service.find({}, function(err, services){
    if(err){
      app.log.error({err: err}, "Error retreiving Catalog Services")
      callback(err);
    }

    app.log.debug({services: services}, "Service list returned")

    //FIXME return the correct Catalog object instead of this hack
    callback(null, { "services": services})
  })
}

Catalog.remoteMethod('get',
  { isStatic: true,
  produces: [ 'application/json' ],
  accepts:
   [ { arg: 'X-Broker-API-Version',
       type: 'string',
       description: 'version number of the Service Broker API that the Platform will use',
       required: true,
       default: "2.13",
       http: { source: 'header' } } ],
  returns:
   [ { description: 'catalog response',
       type: 'Catalog',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/' },
  description: "A response containing a catalog of all services this Service Broker supports" }
);

}
