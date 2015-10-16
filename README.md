# place-lookup
> A lightweight Node.js module to get the latitude and longitude for any fuzzy place name using the Google Places API

[![Dependency Status](https://david-dm.org/lissy93/place-lookup.svg)](https://david-dm.org/lissy93/place-lookup)
[![devDependency Status](https://david-dm.org/lissy93/place-lookup/dev-status.svg)](https://david-dm.org/lissy93/place-lookup#info=devDependencies)
[![Code Climate](https://codeclimate.com/github/Lissy93/place-lookup/badges/gpa.svg)](https://codeclimate.com/github/Lissy93/place-lookup)


## Install
``` npm install place-lookup --save```

## Usage
```javascript
var placeLookup = require('place-lookup');
var apiKey = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

placeLookup("oxford", apiKey, function(result){
    console.log(result) // Do whatever with the results
});
```

## Results
```javascript
{ 
    place_name: 'Paris, France',
    location: { lat: 48.856614, lng: 2.3522219 } 
}
 ```
 

### How to get yourself a Google Places API key
- Head over to [The Google Developer Console](https://console.developers.google.com/)
- In the top-left corner select "New Project" from the projects dropdown. 
- In the API's menu, search for "Google Places API Web Service" and ensure it is set to enabled
- On the Credentials pags: Add Credential --> Server Key --> Give it a name, (leave IP blank if your unsure). Click create
- The 40-ish digit alpha-numeric code is your new key :)


## License
MIT (C) [Alicia Sykes](http://aliciasykes.com)