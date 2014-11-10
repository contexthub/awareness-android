// Beacons

// Event type enum
var awnBeaconEventType = {
    CREATE: 0,
    TAGGED: 1,
    FIND: 2,
    UPDATE: 3,
    DESTROY: 4
}

var eventType = event.data.event_type

if (eventType == awnBeaconEventType.CREATE) {
        // beacon.create
        var newBeacon = {}
        var randomNum = Math.floor((Math.random() * 100) + 1); // Random num between 1 and 100
        newBeacon.name = "New beacon #" + randomNum;
        newBeacon.uuid = "7EA016FB-B7C4-43B0-9FCC-AAB391AE1722"
        newBeacon.major = Math.floor((Math.random() * 65534) + 1);
        newBeacon.minor = Math.floor((Math.random() * 65534) + 1);
        newBeacon.tags = "beacon-tag"
        beacon.create(newBeacon.tags, newBeacon.name, newBeacon.uuid, newBeacon.major, newBeacon.minor)
        console.log("Created beacon '" + newBeacon.name + "'")
} else if (eventType == awnBeaconEventType.TAGGED) {
    // beacon.tagged
    var beaconFoundByTag = beacon.tagged("beacon-tag")
    
    if (beaconFoundByTag.length > 0) {
        var beaconID = beaconFoundByTag[0].id
        
        if (beaconID) {
            console.log("Listing data from first beacon with tag 'beacon-tag'")
            console.log("Found by 'beacon-tag' beacon id: " + beaconFoundByTag[0].id)
            console.log("Found by 'beacon-tag' beacon name: " + beaconFoundByTag[0].name)
            console.log("Found by 'beacon-tag' beacon UUID: " + beaconFoundByTag[0].uuid)
            console.log("Found by 'beacon-tag' beacon major: " + beaconFoundByTag[0].major)
            console.log("Found by 'beacon-tag' beacon minor: " + beaconFoundByTag[0].minor)
            console.log("Found by 'beacon-tag' beacon tags: " + beaconFoundByTag[0].tags)
        } else {
            console.log("No beacon found with tag 'beacon-tag'")
        }
    } else {
        console.log("No beacon found with tag 'beacon-tag'")
    }
} else if (eventType == awnBeaconEventType.FIND) {
    // beacon.find
    var beaconFoundByTag = beacon.tagged("beacon-tag")
    
    if (beaconFoundByTag.length > 0) {
        var beaconID = beaconFoundByTag[0].id
        
        // This example uses beacon.tagged to find an ID, but in a real-world app, it could be found in beacon_in/beacon_out events at event.data.beacon.id or in the payload of a custom event
        var beaconFoundByID = beacon.find(beaconID)
        
        var beaconFoundByID = beacon.find(beaconID)
        
        if (beaconFoundByID) {
            console.log("Listing data from beacon with id: " + beaconID)
            console.log("Found by 'ID' beacon name: " + beaconFoundByID.name)
            console.log("Found by 'ID' beacon UUID: " + beaconFoundByID.uuid)
            console.log("Found by 'ID' beacon major: " + beaconFoundByID.major)
            console.log("Found by 'ID' beacon minor: " + beaconFoundByID.minor)
            console.log("Found by 'ID' beacon tags: " + beaconFoundByID.tags)
        }
        else {
            console.log("No beacon found with id '" + beaconID + "'")
        }
    } else {
        console.log("Could not find any beacons to find")
    }
} else if (eventType == awnBeaconEventType.UPDATE) {
    // beacon.update
    var beaconFoundByTag = beacon.tagged("beacon-tag")
    
    if (beaconFoundByTag.length > 0) {
        var beaconID = beaconFoundByTag[0].id
        
        // This example uses beacon.tagged to find an ID, but in a real-world app, it could be found in beacon_in/beacon_out events at event.data.beacon.id or in the payload of a custom event
        var beaconFoundByID = beacon.find(beaconID)
        
        if (beaconFoundByID) {
            var updatedBeacon = {}
            var updatedRandomNum = Math.floor((Math.random() * 100) + 1); // Random num between 1 and 100
            updatedBeacon.name = "Update beacon #" + updatedRandomNum
            updatedBeacon.uuid = "E004D972-7BB7-47C8-9DCE-E091CB103500"
            updatedBeacon.major = Math.floor((Math.random() * 65534) + 1);
            updatedBeacon.minor = Math.floor((Math.random() * 65534) + 1);
            updatedBeaconTags = "beacon-tag,beacon2-tag"
            beacon.update(beaconID, JSON.stringify(updatedBeacon), updatedBeaconTags)
            
            var updatedBeaconFoundByID = beacon.find(beaconID)
            console.log("Listing data from updated beacon")
            console.log("Updated beacon id: " + beaconID)
            console.log("Updated beacon name: " + updatedBeaconFoundByID.name)
            console.log("Updated beacon UUID: " + updatedBeaconFoundByID.uuid)
            console.log("Updated beacon major: " + updatedBeaconFoundByID.major)
            console.log("Updated beacon minor: " + updatedBeaconFoundByID.minor)
            console.log("Updated beacon tags: " + updatedBeaconFoundByID.tags)
        } else {
            console.log("No beacon found with id '" + beaconID + "'")
        }
    } else {
        console.log("Could not find beacon to update")
    }
} else if (eventType == awnBeaconEventType.DESTROY) {
    // beacon.destroy
    // This example uses beacon.tagged to find an ID, but in a real-world app, it could be found in beacon_in/beacon_out events at event.data.beacon.id or in the payload of a custom event
    var beaconFoundByTag = beacon.tagged("beacon-tag")
    
    if (beaconFoundByTag.length > 0) {
        var beaconID = beaconFoundByTag[0].id
        
        beacon.destroy(beaconID)
        console.log("Deleted beacon with id: " + beaconID)
    } else {
        console.log("Could not find beacon to delete")
    }
}