(function() {
  var formatResults, host, main, makeRequest, makeURL, querystring, removeStingChars, request;

  request = require('request');

  querystring = require('querystring');

  host = "https://maps.googleapis.com/maps/api/place/textsearch/json";

  removeStingChars = function(str) {
    return str.replace(/[^A-Za-z0-9\s,]/g, '');
  };

  makeURL = function(paramaters, apiKey) {
    var urlParams;
    urlParams = typeof paramaters === 'string' ? 'query=' + removeStingChars(paramaters) : typeof paramaters === 'object' ? querystring.stringify(paramaters) : void 0;
    return host + '?' + 'key=' + apiKey + '&' + urlParams;
  };

  formatResults = function(body) {
    return {
      place_name: body.results[0]['formatted_address'],
      location: body.results[0]['geometry']['location']
    };
  };

  makeRequest = function(url, requestCallback) {
    return request({
      url: url,
      json: true
    }, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        return requestCallback(body);
      }
    });
  };

  main = function(paramaters, apiKey, callback) {
    var url;
    url = makeURL(paramaters, apiKey);
    return makeRequest(url, function(results) {
      var e, error1;
      try {
        return callback(formatResults(results));
      } catch (error1) {
        e = error1;
        return callback({
          error: 'Zero results returned'
        });
      }
    });
  };

  module.exports = main;

}).call(this);
/* (C) Alicia Sykes <alicia@aliciasykes.com> 2015           *\
\* MIT License. Read full license at: https://goo.gl/IL4lQJ */