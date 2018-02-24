module.exports = function(app) { //app is injected by loopback

app.registerService = function(service) {
  app.log.info("Registering service: " + service)

  //force in-memory db attachment since consumers of this module may be re-using this model with another datasource
  app.models.Service.attachTo(app.dataSources.db);

  app.models.Service.create(service)
}


};
