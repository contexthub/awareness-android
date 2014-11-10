// Push

// We wrap our context inside a function so it can be returned prematurely
var pushContextRule;
pushContextRule = function() {
    // Event type enum
    var awnPushEventType = {
        TOKEN: 0,
        ID: 1,
        ALIAS: 2,
        TAGS: 3
    }
    
    // Push mode enum
    var awnPushModeType = {
        FOREGROUND: 0,
        BACKGROUND: 1
    }
    
    var eventType = event.data.event_type
    var pushMode = event.data.push_mode
    
    // This context uses the devices object to grab a necessary token, deviceID, alias, and tags
    var devices = device.tagged("device-tag")
    var validDevice = { }
    var foundDeviceWithPushToken = false
    
    if (devices.length > 0) {
        
        // Loop through all devices until we find one with a valid push token (not null)
        for (var i = 0; i < devices.length; i++) {
            validDevice = devices[i]
            
            if (validDevice.push_token != null) {
                foundDeviceWithPushToken = true
                break;
            }
        }
    } else {
        // There are no devices at all
        console.log("No devices in ContextHub")
        return false
    }
    
    if (!foundDeviceWithPushToken) {
        // There were no devices with push tokens
        console.log("No devices with valid push tokens found")
        return false
    }
    
    // Different methods of push
    var token = validDevice.push_token
    var deviceId = validDevice.device_id
    var alias = validDevice.alias
    var arrayOfTags = new Array()
    arrayOfTags.push(validDevice.tags[0]) // Use the first tag in the array
    
    if (pushMode == awnPushModeType.FOREGROUND) {
        // Foreground (creates a visible alert)
        if (eventType == awnPushEventType.TOKEN) {
            // push.sendToToken
            push.sendToToken(token, "Sending message using token")
            console.log("Sending push to token: " + token)
        } else if (eventType == awnPushEventType.ID) {
            // push.sendToDeviceId
            push.sendToDeviceId(deviceId, "Sending message using device id")
            console.log("Sending push to device id: " + deviceId)
        } else if (eventType == awnPushEventType.ALIAS) {
            // push.sendToAlias
            push.sendToAlias(alias, "Sending message using alias")
            console.log("Sending push to alias: " + alias)
        } else if (eventType == awnPushEventType.TAGS) {
            // push.sendToTags
            push.sendToTags(arrayOfTags, "Sending message using tags")
            console.log("Sending push to tag: " + arrayOfTags[0])
        }
    } else {
        // Background (triggers background processing in the app, wakes it up if not running)
        // Our custom data we want to send
        var data = { "payload": {"age": "25", "height": "6.25"} }
        
        if (eventType == awnPushEventType.TOKEN) {
            // push.sendBackgroundToToken
            push.sendBackgroundToToken(token, JSON.stringify(data), "")
            console.log("Sending background push to token " + token + " with data: " + JSON.stringify(data))
        } else if (eventType == awnPushEventType.ID) {
            // push.sendBackgroundToDeviceId
            push.sendBackgroundToDeviceId(deviceId, JSON.stringify(data), "")
            console.log("Sending background push to device id " + deviceId + " with data: " + JSON.stringify(data))
        } else if (eventType == awnPushEventType.ALIAS) {
            // push.sendBackgroundToAlias
            push.sendBackgroundToAlias(alias, JSON.stringify(data), "")
            console.log("Sending background push to alias " + alias + " with data: " + JSON.stringify(data))
        } else if (eventType == awnPushEventType.TAGS) {
            // push.sendBackgroundToTags
            push.sendBackgroundToTags(arrayOfTags, JSON.stringify(data), "")
            console.log("Sending background push to tag " + arrayOfTags[0] + " with data: " + JSON.stringify(data))
        }
    }
    
    return true
}();