# Common Broker

The Common Broker is a common interface to the [Open Service Broker](https://github.com/openservicebrokerapi/servicebroker) (OSB) API specification. It can be imported into any node project as a typical module, and used to plug-in business logic specific to the services you are trying to expose through the OSB API.

### Building
To run this module alongside other projects, just clone this into a parent directory containing your other project and perform an `npm install`.

### Methods
To use the plugin capability, just require the `common-broker` in your other node projects.

`const osb = require('common-broker')`

This will start a new loopback application at [localhost:3001](http://localhost:3001/explorer). Using the methods below, business logic can be plugged into this OSB API and exposed immediately.

*TODO*:
 - provision hook
 - bind hook
 - deprovision hook
 - unbind hook

##### osb.registerService()
Using the explorer of the common-broker, construct a service that matches the model requirements for a `Service` model. Then register this new service with the `common-broker`.

```javascript
let service = {
  "name": "test",
  "id": 1234,
  "description": "A test service",
  "tags": [
    "testTag"
  ],
  "bindable": false,
  "metadata": {},
  "dashboard_client": {
    "id": 0,
    "secret": "string",
    "redirect_uri": "string"
  },
  "plan_updateable": true,
  "plans": [
    {
      "id": 12345,
      "name": "testPlan",
      "description": "A plan for the test service",
      "metadata": {},
      "free": true,
    }
  ]
}

osb.registerService(service)
```

Once the service is registered, it can be seen in the Catalog endpoint of the `common-broker` through [http://localhost:3001/v2/catalog](http://localhost:3001/v2/catalog) or easily tested with the `explorer`.

### Models
The models defined by the `common-broker` are essential for any plug-in service implementation. Rather than manually creating these models within applications using this framework, they can easily be imported and managed directly from your application.

For other loopback applications, here's an example of using one of these models within your app and writing data to a predefined datasource.
```js
let Service = osb.models.Service;
Service.attachTo(db);
Service.create(service, function(err){
  if (err) throw err;
  console.log("Service Definition successfully written to DB");
})
```
