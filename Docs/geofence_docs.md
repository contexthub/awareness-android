# Beacon Documentation

##### This README goes into detail of how to use the geofence object in a context rule

### Table of Contents

1. **[Creating](#creating)**
2. **[Retrieving by Tag](#retrieving-by-tag)**
3. **[Retrieving by ID](#retrieving-by-id)**
4. **[Updating](#updating)**
5. **[Deleting](#deleting)**

## Creating
```javascript
// Creating a geofence
var newGeofence = {}
newGeofence.name = "New geofence"
newGeofence.latitude = 29.763638
newGeofence.longitude = -95.461873
newGeofence.radius = 250
newGeofence.tags = "geofence-tag"
geofence.create(newGeofence.tags, newGeofence.name, newGeofence.latitude, newGeofence.longitude, newGeofence.radius)
```

## Retrieving by Tag
```javascript
// Retrieving a geofence by tags
var geofencesFoundByTag = geofence.tagged("geofence-tag")

if (geofencesFoundByTag > 0) {
    var firstGeofence = geofencesFoundByTag[0]
    
    if (firstGeofence) {
        console.log("Found by 'geofence-tag' geofence name: " + firstGeofence.name)
        console.log("Found by 'geofence-tag' geofence latitude: " + firstGeofence.latitude)
        console.log("Found by 'geofence-tag' geofence longitude: " + firstGeofence.longitude)
        console.log("Found by 'geofence-tag' geofence radius: " + firstGeofence.radius)
        console.log("Found by 'geofence-tag' geofence tags: " + firstGeofence.tags)
    }
}
```

## Retrieving by ID
```javascript
// Retrieving a geofence by ID
var geofenceID = 1500
var geofenceFoundbyID = geofence.find(geofenceID)
        
if (geofenceFoundbyID) {
    console.log("Found by 'geofence-tag' geofence name: " + geofenceFoundbyID.name)
    console.log("Found by 'geofence-tag' geofence latitude: " + geofenceFoundbyID.latitude)
    console.log("Found by 'geofence-tag' geofence longitude: " + geofenceFoundbyID.longitude)
    console.log("Found by 'geofence-tag' geofence radius: " + geofenceFoundbyID.radius)
    console.log("Found by 'geofence-tag' geofence tags: " + geofenceFoundbyID.tags)
}
```

## Updating
```javascript
// Updating a geofence
var geofenceID = 1500
var updatedGeofence = {}
updatedGeofence.name = "Updated geofence"
updatedGeofence.latitude = 23.54590
updatedGeofence.longitude = -98.461873
updatedGeofence.radius = 1000
updatedGeofenceTags = "geofence-tag,geofence2-tag"
geofence.update(geofenceID, JSON.stringify(updatedGeofence), updatedGeofenceTags)
```

## Deleting
```javascript
// Deleting a geofence
var geofenceID = 1500
geofence.destroy(geofenceID)
```