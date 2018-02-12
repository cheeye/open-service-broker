
module.exports = function(Catalog) {

/**
 * get the catalog of services that the service broker offers
 * @param {string} X_Broker_API_Version version number of the Service Broker API that the Platform will use
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Catalog} result Result object
 */
Catalog.get = function(X_Broker_API_Version, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}




Catalog.remoteMethod('get',
  { isStatic: true,
  produces: [ 'application/json' ],
  accepts: 
   [ { arg: 'X-Broker-API-Version',
       type: 'string',
       description: 'version number of the Service Broker API that the Platform will use',
       required: true,
       http: { source: 'header' } } ],
  returns: 
   [ { description: 'catalog response',
       type: 'Catalog',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/v2/catalog' },
  description: undefined }
);

}
