const request = require("request-promise")
const cityCodes = ["4553433", "4544349", "4111410"]




exports.handler = async (event) => {
  
let index = event.Details.Parameters.connectCallerInput;

let cityCode = cityCodes [parseInt (index) - 1];

let options = {uri:`http://api.openweathermap.org/data/2.5/weather?id=${cityCode}&APPID=95fbc89918b82597c2da03159e86411b`};
let data = JSON.parse (await request (options));

let Ktemp = data.main.temp;

console.log (data);

let Ftemp = ((Ktemp * (9/5)) - 459.67).toFixed (1);

return {temp: Ftemp, city: data.name};



};

