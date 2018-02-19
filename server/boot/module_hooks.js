module.exports = function(app) { //app is injected by loopback

app.registerService = function(service) {
  console.log("Registering service: " + service)

  app.models.Service.create(service)
}


};
