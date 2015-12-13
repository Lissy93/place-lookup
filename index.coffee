request = require 'request'
querystring = require 'querystring'

host = "https://maps.googleapis.com/maps/api/place/textsearch/json"

removeStingChars = (str)->
  str.replace(/[^A-Za-z0-9\s,]/g,'')


makeURL = (paramaters, apiKey)->
  urlParams =
    if typeof paramaters is 'string' then 'query='+ removeStingChars paramaters
    else if typeof paramaters is 'object' then querystring.stringify(paramaters)
  host + '?' + 'key=' + apiKey + '&' + urlParams


formatResults = (body)->
  place_name:  body.results[0]['formatted_address']
  location: body.results[0]['geometry']['location']


makeRequest = (url, requestCallback)->
  request { url: url, json: true},
  (error, response, body) ->
    if !error and response.statusCode == 200 then requestCallback(body)


main = (paramaters, apiKey, callback)->
  url = makeURL(paramaters, apiKey)
  makeRequest(url, (results)->
    try callback(formatResults(results))
    catch e then callback({error: 'Zero results returned'})
  )


module.exports = main
