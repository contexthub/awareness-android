# HTTP Documentation

##### This documentation file demonstrates how to use the http object in a context rule

### Table of Contents

1. **[HTTP GET](#http-get)**
2. **[HTTP POST](#http-post)**

## HTTP GET
```javascript
// Send a HTTP GET request
var getURL = "http://requestb.in/vx1hdkvx"
var getURLParams = { "message": "get message from http webhook!" }
http.get(getURL, JSON.stringify(getURLParams))
```

## HTTP POST
```javascript
// Send a HTTP POST request
var postURL = "http://requestb.in/vx1hdkvx"
var postBody = { "message": "post message from http webhook!" }
var postHeaders = { "Content-Type": "application/json"}
http.post(postURL, JSON.stringify(postBody), JSON.stringify(postHeaders))
```