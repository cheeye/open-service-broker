module.exports = function(app) { //app is injected by loopback

app.registerService = function(service, provisionFunc) {
  app.log.debug({service: service}, "Registering service")

  //force in-memory db attachment since consumers of this module may be re-using this model with another datasource
  // app.models.Service.attachTo(app.dataSources.db);
  app.models.Service.create(service);


}

app.registerProvisionListener = function(provisionFunc) {
  app.log.debug("Registered Provision listener")
  app.models.ServiceInstances.serviceInstanceProvision = provisionFunc;
}

app.registerDeprovisionListener = function(deprovisionFunc) {
  app.log.debug("Registered Deprovision listener")
  app.models.ServiceInstances.serviceInstanceDeprovision = deprovisionFunc;
}

};
