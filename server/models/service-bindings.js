
module.exports = function(ServiceBindings) {

/**
 * generation of a service binding
 * @param {ServiceBindingRequest} body parameters for the requested service binding
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {ServiceBinding} result Result object
 */
ServiceBindings.serviceBindingBinding = function(body, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Bad Request');
  err0.statusCode = 400;
  return cb(err0);
  */ 
  /*
  var err1 = new Error('Conflict');
  err1.statusCode = 409;
  return cb(err1);
  */ 
  /*
  var err2 = new Error('Unprocessable Entity');
  err2.statusCode = 422;
  return cb(err2);
  */ 
}


/**
 * deprovision of a service binding
 * @param {string} service_id id of the service associated with the instance being deleted
 * @param {string} plan_id id of the plan associated with the instance being deleted
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Object} result Result object
 */
ServiceBindings.serviceBindingUnbinding = function(service_id, plan_id, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Bad Request');
  err0.statusCode = 400;
  return cb(err0);
  */ 
  /*
  var err1 = new Error('Gone');
  err1.statusCode = 410;
  return cb(err1);
  */ 
}




ServiceBindings.remoteMethod('serviceBindingBinding',
  { isStatic: true,
  produces: [ 'application/json' ],
  accepts: 
   [ { arg: 'body',
       type: 'ServiceBindingRequest',
       description: 'parameters for the requested service binding',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { description: 'OK',
       type: 'ServiceBinding',
       arg: 'data',
       root: true },
     { description: 'Created',
       type: 'ServiceBinding',
       arg: 'data',
       root: true } ],
  http: 
   { verb: 'put',
     path: '/v2/service_instances/:instance_id/service_bindings/:binding_id' },
  description: undefined }
);

ServiceBindings.remoteMethod('serviceBindingUnbinding',
  { isStatic: true,
  accepts: 
   [ { arg: 'service_id',
       type: 'string',
       description: 'id of the service associated with the instance being deleted',
       required: true,
       http: { source: 'query' } },
     { arg: 'plan_id',
       type: 'string',
       description: 'id of the plan associated with the instance being deleted',
       required: true,
       http: { source: 'query' } } ],
  returns: [ { description: 'OK', type: 'Object', arg: 'data', root: true } ],
  http: 
   { verb: 'delete',
     path: '/v2/service_instances/:instance_id/service_bindings/:binding_id' },
  description: undefined }
);

}
