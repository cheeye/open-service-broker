
module.exports = function(ServiceInstances) {

/**
 * provision a service instance
 * @param {ServiceInstanceProvisionRequest} body parameters for the requested service instance provision
 * @param {boolean} accepts_incomplete asynchronous operations supported
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {ServiceInstanceAsyncProvision} result Result object
 */
ServiceInstances.serviceInstanceProvision = function(body, accepts_incomplete, callback) {

  console.log("something?");

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  // process.nextTick(function() {
  //   var err = new Error('Not implemented');
  //   callback(err);
  // });

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
 * update a service instance
 * @param {ServiceInstanceUpdateRequest} body parameters for the requested service instance update
 * @param {boolean} accepts_incomplete asynchronous operations supported
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {AsyncOperation} result Result object
 */
ServiceInstances.serviceInstanceUpdate = function(body, accepts_incomplete, callback) {

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
  var err1 = new Error('Unprocessable entity');
  err1.statusCode = 422;
  return cb(err1);
  */
}


/**
 * deprovision a service instance
 * @param {boolean} accepts_incomplete asynchronous operations supported
 * @param {string} service_id id of the service associated with the instance being deleted
 * @param {string} plan_id id of the plan associated with the instance being deleted
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {AsyncOperation} result Result object
 */
ServiceInstances.serviceInstanceDeprovision = function(accepts_incomplete, service_id, plan_id, callback) {

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
  /*
  var err2 = new Error('Unprocessable Entity');
  err2.statusCode = 422;
  return cb(err2);
  */
}


/**
 * last requested operation state for service instance
 * @param {string} service_id id of the service associated with the instance
 * @param {string} plan_id id of the plan associated with the instance
 * @param {string} operation a provided identifier for the operation
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {ServiceInstanceLastOperation} result Result object
 */
ServiceInstances.serviceInstanceLastOperationGet = function(service_id, plan_id, operation, callback) {

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




ServiceInstances.remoteMethod('serviceInstanceProvision',
  { isStatic: true,
  consumes: [ 'application/json' ],
  produces: [ 'application/json' ],
  accepts:
   [ { arg: 'body',
       type: 'ServiceInstanceProvisionRequest',
       description: 'parameters for the requested service instance provision',
       required: true,
       http: { source: 'body' } },
     { arg: 'accepts_incomplete',
       type: 'boolean',
       description: 'asynchronous operations supported',
       required: undefined,
       http: { source: 'query' } } ],
  returns:
   [ { description: 'OK',
       type: 'ServiceInstanceProvision',
       arg: 'data',
       root: true },
     { description: 'Created',
       type: 'ServiceInstanceProvision',
       arg: 'data',
       root: true },
     { description: 'Accepted',
       type: 'ServiceInstanceAsyncProvision',
       arg: 'data',
       root: true } ],
  http: { verb: 'put', path: '/v2/service_instances/:instance_id' },
  description: undefined }
);

ServiceInstances.remoteMethod('serviceInstanceUpdate',
  { isStatic: true,
  consumes: [ 'application/json' ],
  produces: [ 'application/json' ],
  accepts:
   [ { arg: 'body',
       type: 'ServiceInstanceUpdateRequest',
       description: 'parameters for the requested service instance update',
       required: true,
       http: { source: 'body' } },
     { arg: 'accepts_incomplete',
       type: 'boolean',
       description: 'asynchronous operations supported',
       required: undefined,
       http: { source: 'query' } } ],
  returns:
   [ { description: 'OK', type: 'Object', arg: 'data', root: true },
     { description: 'Accepted',
       type: 'AsyncOperation',
       arg: 'data',
       root: true } ],
  http: { verb: 'patch', path: '/v2/service_instances/:instance_id' },
  description: undefined }
);

ServiceInstances.remoteMethod('serviceInstanceDeprovision',
  { isStatic: true,
  produces: [ 'application/json' ],
  accepts:
   [ { arg: 'accepts_incomplete',
       type: 'boolean',
       description: 'asynchronous operations supported',
       required: undefined,
       http: { source: 'query' } },
     { arg: 'service_id',
       type: 'string',
       description: 'id of the service associated with the instance being deleted',
       required: true,
       http: { source: 'query' } },
     { arg: 'plan_id',
       type: 'string',
       description: 'id of the plan associated with the instance being deleted',
       required: true,
       http: { source: 'query' } } ],
  returns:
   [ { description: 'OK', type: 'Object', arg: 'data', root: true },
     { description: 'Accepted',
       type: 'AsyncOperation',
       arg: 'data',
       root: true } ],
  http: { verb: 'delete', path: '/v2/service_instances/:instance_id' },
  description: undefined }
);

ServiceInstances.remoteMethod('serviceInstanceLastOperationGet',
  { isStatic: true,
  produces: [ 'application/json' ],
  accepts:
   [ { arg: 'service_id',
       type: 'string',
       description: 'id of the service associated with the instance',
       required: undefined,
       http: { source: 'query' } },
     { arg: 'plan_id',
       type: 'string',
       description: 'id of the plan associated with the instance',
       required: undefined,
       http: { source: 'query' } },
     { arg: 'operation',
       type: 'string',
       description: 'a provided identifier for the operation',
       required: undefined,
       http: { source: 'query' } } ],
  returns:
   [ { description: 'OK',
       type: 'ServiceInstanceLastOperation',
       arg: 'data',
       root: true } ],
  http:
   { verb: 'get',
     path: '/v2/service_instances/:instance_id/last_operation' },
  description: undefined }
);

}
