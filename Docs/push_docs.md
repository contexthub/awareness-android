# Push Documentation

##### This README goes into detail of how to use the push object in a context rule

### Table of Contents

1. **[Sending Foreground Push](#sending-foreground-push)**
2. **[Sending Background Push](#sending-background-push)**

## Sending Foreground Push
```javascript
// Sending foreground pushes via different identifiers
var token = "71962e3cbc7dfa91e8bec21b532b69c211a55453a1407299bb78f931c7e8f7ec"
var deviceId = "BC903204-51C1-4DF6-92E8-F5A5DE00E26E"
var alias = "Jeff's iPhone 5"
var arrayOfTags = = new Array()
arrayOfTags.push("device-tag")

// Sending foreground push via token
push.sendToToken(token, "Sending message using token")

// Sending foreground push via device id
push.sendToDeviceId(deviceId, "Sending message using device id")

// Sending foreground push via alias
push.sendToAlias(alias, "Sending message using alias")

// Sending foreground push via tags
push.sendToTags(arrayOfTags, "Sending message using tags")
```

## Sending Background Push
```javascript
// Sending background pushes via different identifiers
var token = "71962e3cbc7dfa91e8bec21b532b69c211a55453a1407299bb78f931c7e8f7ec"
var deviceId = "BC903204-51C1-4DF6-92E8-F5A5DE00E26E"
var alias = "Jeff's iPhone 5"
var arrayOfTags = = new Array()
arrayOfTags.push("device-tag")

var data = { "payload": {"age": "25", "height": "6.25"} }
var sound = ""

// Sending background push via token
push.sendBackgroundToToken(token, JSON.stringify(data), sound)

// Sending background push via device id
push.sendBackgroundToDeviceId(deviceId, JSON.stringify(data), sound)

// Sending background push via alias
push.sendBackgroundToAlias(alias, JSON.stringify(data), sound)

// Sending background push via tags
push.sendBackgroundToTags(arrayOfTags, JSON.stringify(data), sound)
```