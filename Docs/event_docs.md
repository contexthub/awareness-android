# Event Documentation

##### This documentation file demonstrates how to use the event object in a context rule

### Table of Contents

1. **[Accessing](#accessing)**

## Accessing
```javascript
// Accessing event data
var eventName = event.name
var eventData = event.data
var eventContext = event.context
var eventPayload = event.payload
var eventCreatedAt = event.createdAt

// Accessing data about device that generated the event
var deviceName = event.context[2].device_context.name
var deviceID = event.context[2].device_context.device_id
var deviceType = event.context[2].device_context.type
var deviceModel = event.context[2].device_context.model
var systemName = event.context[2].device_context.system_name
var systemVersion = event.context[2].device_context.system_version
```