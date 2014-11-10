// HTTP

// Event type enum
var awnHTTPEventType = {
    GET: 0,
    POST: 1
}

var eventType = event.data.event_type

if (eventType == awnHTTPEventType.GET) {
    // Send a HTTP GET request
    var url = "http://requestb.in/vx1hdkvx"
    var urlParams = { "message": "get message from http_event!" }
    http.get(url, JSON.stringify(urlParams))
    console.log("HTTP GET webhook fired")
} else {
    // Send a HTTP POST request
    var url = "http://requestb.in/vx1hdkvx"
    var body = { "message": "post message from http_event!" }
    var headers = { "Content-Type": "application/json"}
    http.post(url, JSON.stringify(body), JSON.stringify(headers))
    console.log("HTTP POST webhook fired")
}

// Inspect the results of these 2 HTTP GET and POST requests by going to http://requestb.in/vx1hdkvx?inspect