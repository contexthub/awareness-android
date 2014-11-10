// Geofences

// Event type enum
var awnGeofenceEventType = {
    CREATE: 0,
    TAGGED: 1,
    FIND: 2,
    UPDATE: 3,
    DESTROY: 4
}

var eventType = event.data.event_type

if (eventType == awnGeofenceEventType.CREATE) {
    // geofence.create
    var newGeofence = {}
    var randomNum = Math.floor((Math.random() * 100) + 1); // Random num between 1 and 100
    newGeofence.name = "New geofence #" + randomNum
    newGeofence.latitude = (Math.random() * 180) - 90
    newGeofence.longitude = (Math.random() * 360) - 180
    newGeofence.radius = Math.floor((Math.random() * 400) + 100)  // Random radius betweeon 100 and 500
    newGeofence.tags = "geofence-tag"
    geofence.create(newGeofence.tags, newGeofence.name, newGeofence.latitude, newGeofence.longitude, newGeofence.radius)
    console.log("Created geofence '" + newGeofence.name + "'")
} else if (eventType == awnGeofenceEventType.TAGGED) {
    // geofence.tagged
    var geofenceFoundByTag = geofence.tagged("geofence-tag")
    
    if (geofenceFoundByTag.length > 0) {
        var geofenceID = geofenceFoundByTag[0].id
        
        if (geofenceID) {
            console.log("Found by 'geofence-tag' geofence name: " + geofenceFoundByTag[0].name)
            console.log("Found by 'geofence-tag' geofence latitude: " + geofenceFoundByTag[0].latitude)
            console.log("Found by 'geofence-tag' geofence longitude: " + geofenceFoundByTag[0].longitude)
            console.log("Found by 'geofence-tag' geofence radius: " + geofenceFoundByTag[0].radius)
            console.log("Found by 'geofence-tag' geofence tags: " + geofenceFoundByTag[0].tags)
        } else {
            console.log("No geofence found with tag 'geofence-tag'")
        }
    } else {
        console.log("No beacon found with tag 'geofence-tag'")
    }
} else if (eventType == awnGeofenceEventType.FIND) {
    // geofence.find
    var geofenceFoundByTag = geofence.tagged("geofence-tag")
    
    if (geofenceFoundByTag.length > 0) {
        var geofenceID = geofenceFoundByTag[0].id
        
        // This example uses geofence.tagg to find an ID, but in a real-world app, it could be found in geofence_in/geofence_out events at event.data.geofence.id or in the payload of a custom event
        var geofenceFoundByID = geofence.find(geofenceID)
        
        if (geofenceFoundByID) {
            console.log("Found by 'ID' geofence name: " + geofenceFoundByID.name)
            console.log("Found by 'ID' geofence latitude: " + geofenceFoundByID.latitude)
            console.log("Found by 'ID' geofence longitude: " + geofenceFoundByID.longitude)
            console.log("Found by 'ID' geofence radius: " + geofenceFoundByID.radius)
            console.log("Found by 'ID' geofence tags: " + geofenceFoundByID.tags)
        } else {
            console.log("No geofence found with id '" + geofenceID + "'")
        }
    } else {
        console.log("Could not find any geofences to find")
    }
} else if (eventType == awnGeofenceEventType.UPDATE) {
    // geofence.update
    var geofenceFoundByTag = geofence.tagged("geofence-tag")
    
    if (geofenceFoundByTag.length > 0) {
        var geofenceID = geofenceFoundByTag[0].id
        
        // This example uses geofence.tagg to find an ID, but in a real-world app, it could be found in geofence_in/geofence_out events at event.data.geofence.id or in the payload of a custom event
        var geofenceFoundByID = geofence.find(geofenceID)
        
        if (geofenceFoundByID) {
            var updatedGeofence = {}
            var randomNum = Math.floor((Math.random() * 100) + 1); // Random num between 1 and 100
            updatedGeofence.name = "Updated geofence #" + randomNum
            updatedGeofence.latitude = (Math.random() * 180) - 90
            updatedGeofence.longitude = (Math.random() * 360) - 180
            updatedGeofence.radius = Math.floor((Math.random() * 400) + 100)  // Random radius betweeon 100 and 500
            updatedGeofenceTags = "geofence-tag,geofence2-tag"
            geofence.update(geofenceID, JSON.stringify(updatedGeofence), updatedGeofenceTags)
            
            var updatedGeofenceFoundByID = geofence.find(geofenceID)
            console.log("Listing data from updated geofence")
            console.log("Updated geofence id: " + geofenceID)
            console.log("Updated geofence name: " + updatedGeofenceFoundByID.name)
            console.log("Updated geofence UUID: " + updatedGeofenceFoundByID.latitude)
            console.log("Updated geofence major: " + updatedGeofenceFoundByID.longitude)
            console.log("Updated geofence minor: " + updatedGeofenceFoundByID.radius)
            console.log("Updated geofence tags: " + updatedGeofenceFoundByID.tags)
        } else {
            console.log("No geofence found with id '" + geofenceID + "'")
        }
    } else {
        console.log("Could not find geofence to update")
    }
} else if (eventType == awnGeofenceEventType.DESTROY) {
    // geofence.destroy
    // This example uses geofence.tagg to find an ID, but in a real-world app, it could be found in geofence_in/geofence_out events at event.data.geofence.id or in the payload of a custom event
    var geofenceFoundByTag = geofence.tagged("geofence-tag")
    
    if (geofenceFoundByTag.length > 0) {
        var geofenceID = geofenceFoundByTag[0].id
        
        if (geofenceID) {
            geofence.destroy(geofenceID)
            console.log("Deleted geofence with id: " + geofenceID)
        } else {
            console.log("Could not find geofence to delete")
        }
    } else {
        console.log("Could not find geofence to delete")
    }
}