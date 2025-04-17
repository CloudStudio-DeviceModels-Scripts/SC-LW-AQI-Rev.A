function getConfiguration(config) 
{ 
	config.addressLabel = {en: "DevEUI", es: "DevEUI"};
}

function getEndpoints(deviceAddress, endpoints)
{
  endpoints.addEndpoint("1", "Temperature sensor", endpointType.temperatureSensor);
  endpoints.addEndpoint("2", "Humidity sensor", endpointType.humiditySensor);
  endpoints.addEndpoint("3", "CO₂ sensor", endpointType.ppmConcentrationSensor, ppmConcentrationSensorSubType.carbonDioxide);
  endpoints.addEndpoint("4", "VOC sensor", endpointType.ppmConcentrationSensor, ppmConcentrationSensorSubType.voc);
  endpoints.addEndpoint("5", "AQI sensor", endpointType.airQualityIndexSensor);
}

function validateDeviceAddress(address, result)
{
  if (address.length != 16) {
    result.ok = false;
    result.errorMessage = {
      en: "The address must be 16 characters long.", 
      es: "La dirección debe tener exactamente 16 caracteres."
    };
  }
}

function updateDeviceUIRules(device, rules)
{
  rules.canCreateEndpoints = false;
}

function updateEndpointUIRules(endpoint, rules)
{
  rules.canDelete = false;
  rules.canEditSubtype = false;
}
