# Awareness (Context Rule) Sample app

The Awareness sample app introduces you to the contextual rule features of the ContextHub Developer Portal.

### Table of Contents

1. **[Purpose](#purpose)**
2. **[ContextHub Use Case](#contexthub-use-case)**
3. **[Background](#background)**
4. **[Getting Started](#getting-started)**
5. **[Setting Up Context Rules](#creating-a-new-context)**
6. **[Triggering a Context](#triggering-a-context)**
7. **[Testing a Context](#testing-a-context)**
8. **[Special Context Rule - Tick](#special-context-rule-tick)**
9. **[Sample Code](#sample-code)**
10. **[Usage](#usage)**
11. **[Final Words](#final-words)**

## Purpose
This sample application will show you how to use the provided contextual objects in a context rule via custom events and set off running those context rules via triggered events in the ContextHub SDK

## ContextHub Use Case
In this sample application, we use ContextHub to write context rules in the developer portal so you can learn to interact with the different objects available to you after an event has been triggered. These context rules are triggered by custom events defined by you, the developer, and can be triggered with an API command that allows you to send your own data structures similar to those seen in pre-defined events like beacon_in/beacon_out. This gives you additional flexibility over the payload property as you can define your own events for your own application.

## Background
The heart and true purpose of ContextHub involves creating contextual experiences which can be changed without redeploying your application to Google Play, allowing far greater developer flexibility during development. In ContextHub, this power is best expressed in context rules, little snippets of JavaScript which are evaluated when every event is fired. This allows for the creation of new contextual elements, sending push notification to devices, storing data in the vault, logging a message to the console, or firing a webhook to your own or other web services. You will be shown examples of how to use each of these objects in your own context rules to speed up development when using ContextHub.

## Getting Started
1. Get started by either forking or cloning the Awareness repo. Visit [GitHub Help](https://help.github.com/articles/fork-a-repo) if you need help.
2. Go to [ContextHub](http://app.contexthub.com) and create a new Awareness application.
3. Find the app id associated with the application you just created. Its format looks something like this: `13e7e6b4-9f33-4e97-b11c-79ed1470fc1d`.
4. Open up your project and put the app id into the `ContextHub.init(this, "YOUR-APP-ID-HERE")` method call in the `AwarenessApp` class.
5. Build and run the project on a physical Android device (push features will not work on an emulator without Google Play Services). See the [NotifyMe](https://github.com/contexthub/notify-me-android) sample app for how to setup push notifications.

## Setting Up Context Rules
1. Contexts let you change how the server will respond to events triggered by devices. The real power of ContextHub comes from collecting and reacting these events to perform complex actions. Let's go ahead and create a new context.
2. Click on "Contexts" tab, then click the "New Context" button to start making a new context rule.
3. Included in the project are several contexts in the `Contexts` directory which contains the context rules needed to make each section work. Go ahead and name this new context "Beacon Event", with an event type "beacon_event", then copy and paste the associated JavaScript into the code text box then click save. Make sure that the event type matches the name of the file exactly, as this is how ContextHub matches events to context rules.
4. Do this for the remaining JavaScript files, and you should have 8 new contexts you just saved in the developer portal.

## Triggering a Context
1. Now back on your device, you should be able to tap on the row "Event" to trigger a custom event.
2. In the developer portal, click on "Contexts" at the top again to refresh the page. You should now see the event you just triggered under "Latest Events". Tap "View" to see the data sent in an event.
3. Inside the popup, you'll see that each event always has a name and associated context package related to the device that sent it.
3. Now back on your device, tap on "Console" and type in a message. This should generate a console_event, which inside the context rule will log a your message to the logs. (Note: there is a CCHLog class which exists which does the same thing without needing a context rule).
4. Click on "Logs" at the top to see your logs. Refresh the page after 5 seconds if you are not seeing this message immediately.
5. The console_event context rule extracts the message sent in the data to be passed to `console.log()` to log a message.
6. You can do the same with beacons, geofences, push, vault, and http. Events will be triggered, causing a context rule to fire, and messages to be logged in the logs section of ContextHub.

## Testing a Context
1. In addition to triggering a context rule from the app, you can also test a context directly in the developer portal.
2. Go to "Contexts", and edit a context rule you have already created.
3. Click on "Test Your Context" to expand the test area which will show a list of your latest events as well as a box with the latest event.
4. Click on an event to have it appear in the box next to it.
5. Then click "Test" to have the context execute. You will then see either "true" indicating it was executed successfully or an error message from how the context rule was written or the result of the context.
6. Testing your context makes it possible to debug changes to your rule before saving them for production.

## Special Context Rule - Tick
The "tick" context is a special contextual rule that automatically gets fired once every minute. This allows your applic ation to run code in the absence of an event. Using the JavaScript Date() object, you can use the tick context to have something happen roughly at a specific time.

## Sample Code
In this sample, each event is triggered with a call to `SensorPipeline.triggerEvent(SensorPipelineEvent event)` with custom data passed to ContextHub. When paired with a matching context rule with the same event type, the context rule is evaluated by running your JavaScript code. Events fired in this manner have a data field filled with your JSON-serializable data structure, along with the usual context package detailing information about the device which generated the event. A context rule is then evaluated with either a `true` indicating everything worked OK or an error message if the rule was written incorrectly.

## Usage
Below is the code used to trigger a custom event in ContextHub, which then triggers a context rule to be evaluated on the server:
```java
JSONObject data = new JSONObject();
data.put("temperature", 97.0);
data.put("humidity", 30.0);
SensorPipelineEvent event = new SensorPipelineEvent("custom_event", data);
SensorPipeline.getInstance().triggerEvent(event); // does not require a callback, listen for success/failure via SensorPipelineListener
```

Then, here are links to specific documentation that demonstrates how to use each of the objects in a context rule:

- **[Events](/Docs/event_docs.md)**
- **[Console](/Docs/console_docs.md)**
- **[Beacon](/Docs/beacon_docs.md)**
- **[Geofence](/Docs/geofence_docs.md)**
- **[Push](/Docs/push_docs.md)**
- **[Vault](/Docs/vault_docs.md)**
- **[HTTP](/Docs/http_docs.md)**
- **[Tick](/Docs/tick_docs.md)**

## Final Words

That's it! Hopefully this sample application showed you that working with context rules in ContextHub can lead to more contextually aware applications in a shorter period of development time.
