# Beacon Documentation

##### This documentation file demonstrates how to use the beacon object in a context rule

### Table of Contents

1. **[Creating](#creating)**
2. **[Retrieving by Tag](#retrieving-by-tag)**
3. **[Retrieving by ID](#retrieving-by-id)**
4. **[Updating](#updating)**
5. **[Deleting](#deleting)**

## Creating
```javascript
// Creating a beacon
var newBeacon = {}
newBeacon.name = "New beacon"
newBeacon.uuid = "7EA016FB-B7C4-43B0-9FCC-AAB391AE1722"
newBeacon.major = 100
newBeacon.minor = 1
newBeacon.tags = "beacon-tag"
beacon.create(newBeacon.tags, newBeacon.name, newBeacon.uuid, newBeacon.major, newBeacon.minor)
console.log("Created beacon '" + newBeacon.name + "'")
```

## Retrieving by Tag
```javascript
// Retrieving a beacon by tags
var beaconsFoundByTag = beacon.tagged("beacon-tag")

if (beaconsFoundByTag.length > 0) {
    var firstBeacon = beaconsFoundByTag[0]
    
    if (firstBeacon) {
        console.log("Listing data from first beacon with tag 'beacon-tag'")
        console.log("Found by 'beacon-tag' beacon id: " + firstBeacon.id)
        console.log("Found by 'beacon-tag' beacon name: " + firstBeacon.name)
        console.log("Found by 'beacon-tag' beacon UUID: " + firstBeacon.uuid)
        console.log("Found by 'beacon-tag' beacon major: " + firstBeacon.major)
        console.log("Found by 'beacon-tag' beacon minor: " + firstBeacon.minor)
        console.log("Found by 'beacon-tag' beacon tags: " + firstBeacon.tags)
    }
}
```

## Retrieving by ID
```javascript
// Retrieving a beacon by ID
var beaconID = 1500
var beaconFoundByID = beacon.find(beaconID)
        
if (beaconFoundByID) {
    console.log("Listing data from beacon with id: " + beaconID)
    console.log("Found by 'ID' beacon name: " + beaconFoundByID.name)
    console.log("Found by 'ID' beacon UUID: " + beaconFoundByID.uuid)
    console.log("Found by 'ID' beacon major: " + beaconFoundByID.major)
    console.log("Found by 'ID' beacon minor: " + beaconFoundByID.minor)
    console.log("Found by 'ID' beacon tags: " + beaconFoundByID.tags)
}
```

## Updating
```javascript
// Updating a beacon
var beaconID = 1500
var updatedBeacon = {}
updatedBeacon.name = "Update beacon"
updatedBeacon.uuid = "E004D972-7BB7-47C8-9DCE-E091CB103500"
updatedBeacon.major = 200
updatedBeacon.minor = 2
updatedBeaconTags = "beacon-tag,beacon2-tag"
beacon.update(beaconID, JSON.stringify(updatedBeacon), updatedBeaconTags)
```

## Deleting
```javascript
// Deleting a beacon
var beaconID = 1500
beacon.destroy(beaconID)
```