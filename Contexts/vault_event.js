// Vault

// Event type enum
var awnVaultEventType = {
    CREATE: 0,
    TAGGED: 1,
    FIND: 2,
    UPDATE: 3,
    DESTROY: 4,
    CONTAINS: 5,
    KEY_PATH: 6
}

var eventType = event.data.event_type

if (eventType == awnVaultEventType.CREATE) {
    // vault.create
    var newVault = {}
    newVault.name = "Michael Austin"
    newVault.currentPosition = "Account Executive"
    newVault.height = "6.42"
    newVault.age = "36"
    newVault.nicknames = ["The Closer", "The Warrior", "Catcher of Big Fish"]
    newVault.kids = {"Jason": "6", "Molly": "5"}
    var newVaultTags = "vault-tag"
    vault.create(JSON.stringify(newVault), newVaultTags)
    console.log("Created vault item '" + newVault.name + "'")
} else if (eventType == awnVaultEventType.TAGGED) {
    // vault.tagged
    var vaultFoundByTag = vault.tagged("vault-tag")
    
    if (vaultFoundByTag.length > 0) {
        var vaultID = vaultFoundByTag[0].vault_info.id
        
        console.log("Listing data from first vault item with tag 'vault-tag'")
        console.log("Found by 'vault-tag' vault name: " + vaultFoundByTag[0].data.name)
        console.log("Found by 'vault-tag' vault id: " + vaultID)
        console.log("Found by 'vault-tag' vault currentPosition: " + vaultFoundByTag[0].data.currentPosition)
        console.log("Found by 'vault-tag' vault height: " + vaultFoundByTag[0].data.height)
        console.log("Found by 'vault-tag' vault age: " + vaultFoundByTag[0].data.age)
        console.log("Found by 'vault-tag' vault nicknames: " + vaultFoundByTag[0].data.nicknames)
        console.log("Found by 'vault-tag' vault kids: " + JSON.stringify(vaultFoundByTag[0].data.kids))
        console.log("Found by 'vault-tag' vault tags: " + vaultFoundByTag[0].vault_info.tags)
    } else {
        console.log("No vault item found with tag 'vault-tag'")
    }
} else if (eventType == awnVaultEventType.FIND) {
    // vault.find
    var vaultFoundByTag = vault.tagged("vault-tag")
    
    if (vaultFoundByTag.length > 0) {
        // This example uses vault.tagged to find an ID, but in a real-world app, it could be found in the payload of a custom event
        var vaultID = vaultFoundByTag[0].vault_info.id
        var vaultFoundByID = vault.find(vaultID)
        
        console.log("Found by 'ID' vault name: " + vaultFoundByID.data.name)
        console.log("Found by 'ID' vault id: " + vaultFoundByID.vault_info.id)
        console.log("Found by 'ID' vault currentPosition: " + vaultFoundByID.data.currentPosition)
        console.log("Found by 'ID' vault height: " + vaultFoundByID.data.height)
        console.log("Found by 'ID' vault age: " + vaultFoundByID.data.age)
        console.log("Found by 'ID' vault nicknames: " + vaultFoundByID.data.nicknames)
        console.log("Found by 'ID' vault kids: " + JSON.stringify(vaultFoundByID.data.kids))
        console.log("Found by 'ID' vault tags: " + vaultFoundByID.vault_info.tags)
    } else {
        console.log("Could not find any vault items to find")
    }
} else if (eventType == awnVaultEventType.UPDATE) {
    // vault.update
    var vaultFoundByTag = vault.tagged("vault-tag")
    
    if (vaultFoundByTag.length > 0) {
        var vaultID = vaultFoundByTag[0].vault_info.id
        
        var updatedVault = {}
        updatedVault.name = "Jim Houston"
        updatedVault.currentPosition = "CIO"
        updatedVault.height = "5.82"
        updatedVault.age = "41"
        updatedVault.nicknames = ["All Knowing", "Watch Dog"]
        updatedVault.kids = {"Madison": "8", "Amelia": "7"}
        updatedVaultTags = "vault-tag,vault2-tag"
        vault.update(vaultID, JSON.stringify(updatedVault), updatedVaultTags)
        
        // verify vault.update
        var updatedVaultFoundByID = vault.find(vaultID)
        
        if (updatedVaultFoundByID) {
            console.log("Updated found by 'ID' vault name: " + updatedVaultFoundByID.data.name)
            console.log("Updated found by 'ID' vault currentPosition: " + updatedVaultFoundByID.data.currentPosition)
            console.log("Updated found by 'ID' vault height: " + updatedVaultFoundByID.data.height)
            console.log("Updated found by 'ID' vault age: " + updatedVaultFoundByID.data.age)
            console.log("Updated found by 'ID' vault nicknames: " + updatedVaultFoundByID.data.nicknames)
            console.log("Updated found by 'ID' vault kids: " + JSON.stringify(updatedVaultFoundByID.data.kids))
            console.log("Updated found by 'ID' vault tags: " + updatedVaultFoundByID.vault_info.tags)
        } else {
            console.log("No vault item exist in vault with id " + vaultID)
        }
    } else {
        console.log("Could not find vault item to update")
    }
} else if (eventType == awnVaultEventType.DESTROY) {
    // vault.destroy
    // This example uses beacon.tagged to find an ID, but in a real-world app, it could be found in the payload of a custom event
    var vaultFoundByTag = vault.tagged("vault-tag")
    
    if (vaultFoundByTag.length > 0) {
        var vaultID = vaultFoundByTag[0].vault_info.id
        
        vault.destroy(vaultID)
        console.log("Deleted vault item with id: " + vaultID)
    } else {
        console.log("Could not find vault item to delete")
    }
} else if (eventType == awnVaultEventType.CONTAINS) {
    // vault.contains
    var vaultFoundByTag = vault.tagged("vault-tag")
    
    if (vaultFoundByTag.length > 0) {
        var vaultID = vaultFoundByTag[0].vault_info.id
        
        // This example uses vault.tagged to find an ID, but in a real-world app, it could be found in the payload of a custom event
        var vaultFoundByID = vault.find(vaultID)
        
        var containsValue = vaultFoundByID.name
        var vaultFoundByContainsArray = vault.contains(containsValue)
        
        if (vaultFoundByContainsArray.length > 0) {
            var vaultFoundByContains = vaultFoundByContainsArray[0]
            
            if (vaultFoundByContains) {
                console.log("Found by 'contains' vault name: " + vaultFoundByContains.data.name)
                console.log("Found by 'contains' vault currentPosition: " + vaultFoundByContains.data.currentPosition)
                console.log("Found by 'contains' vault height: " + vaultFoundByContains.data.height)
                console.log("Found by 'contains' vault age: " + vaultFoundByContains.data.age)
                console.log("Found by 'contains' vault nicknames: " + vaultFoundByContains.data.nicknames)
                console.log("Found by 'contains' vault kids: " + JSON.stringify(vaultFoundByContains.data.kids))
                console.log("Found by 'contains' vault tags: " + vaultFoundByContains.vault_info.tags)
            } else {
                console.log("Could not get first vault item from vaultFoundByContainsArray")
            }
        } else {
            console.log("No vault item exists containing value " + containsValue)
        }
    } else {
        console.log("Could not find any vault items to check contains")
    }
    
} else if (eventType == awnVaultEventType.KEY_PATH) {
    // vault.key_path
    var vaultFoundByTag = vault.tagged("vault-tag")
    
    if (vaultFoundByTag.length > 0) {
        var vaultID = vaultFoundByTag[0].vault_info.id
        
        // This example uses vault.tagged to find an ID, but in a real-world app, it could be found in the payload of a custom event
        var vaultFoundByID = vault.find(vaultID)
        
        var key_path = "name"
        var value = vaultFoundByID.name
        var vaultFoundByKeyPathArray = vault.key_path(key_path, value)
        
        if (vaultFoundByKeyPathArray.length > 0) {
            var vaultFoundByKeyPath = vaultFoundByKeyPathArray[0]
            
            if (vaultFoundByKeyPath) {
                console.log("Found by 'key_path' vault name: " + vaultFoundByKeyPath.data.name)
                console.log("Found by 'key_path' vault currentPosition: " + vaultFoundByKeyPath.data.currentPosition)
                console.log("Found by 'key_path' vault height: " + vaultFoundByKeyPath.data.height)
                console.log("Found by 'key_path' vault age: " + vaultFoundByKeyPath.data.age)
                console.log("Found by 'key_path' vault nicknames: " + vaultFoundByKeyPath.data.nicknames)
                console.log("Found by 'key_path' vault kids: " + JSON.stringify(vaultFoundByKeyPath.data.kids))
                console.log("Found by 'key_path' vault tags: " + vaultFoundByKeyPath.vault_info.tags)
            } else {
                console.log("Could not get first vault item from vaultFoundByKeyPathArray")
            }
        } else {
            console.log("No vault items exist in vault at key_path " + key_path + " with value " + value)
        }
    } else {
        console.log("Could not find any vault items to key_path")
    }
}