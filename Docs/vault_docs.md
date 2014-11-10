# Vault Documentation

##### This documentation file demonstrates how to use the vault object in a context rule

### Table of Contents

1. **[Creating](#creating)**
2. **[Retrieving by Tag](#retrieving-by-tag)**
3. **[Retrieving by ID](#retrieving-by-id)**
4. **[Updating](#updating)**
5. **[Deleting](#deleting)**
4. **[Contains](#contains)**
5. **[KeyPath](#keypath)**

## Creating
```javascript
// Creating a vault item
var newVaultItem = {}
newVaultItem.name = "Michael Austin"
newVaultItem.currentPosition = "Account Executive"
newVaultItem.height = "6.42"
newVaultItem.age = "36"
newVaultItem.nicknames = ["The Closer", "The Warrior", "Catcher of Big Fish"]
newVaultItem.kids = {"Jason": "6", "Molly": "5"}
var newVaultItemTags = "vault-tag"
vault.create(JSON.stringify(newVaultItem), newVaultItemTags)
```

## Retrieving by Tag
```javascript
// Retrieving a vault item by tags
var vaultItemsFoundByTag = vault.tagged("vault-tag")

if (vaultItemsFoundByTag.length > 0) {
    var firstVaultItem = vaultItemsFoundByTag.length[0]
    
    if (firstVaultItem) {
        console.log("Listing data from first vault item with tag 'vault-tag'")
        console.log("Found by 'vault-tag' vault name: " + firstVaultItem.data.name)
        console.log("Found by 'vault-tag' vault id: " + firstVaultItem.vault_info.id)
        console.log("Found by 'vault-tag' vault currentPosition: " + firstVaultItem.data.currentPosition)
        console.log("Found by 'vault-tag' vault height: " + firstVaultItem.data.height)
        console.log("Found by 'vault-tag' vault age: " + firstVaultItem.data.age)
        console.log("Found by 'vault-tag' vault nicknames: " + firstVaultItem.data.nicknames)
        console.log("Found by 'vault-tag' vault kids: " + JSON.stringify(firstVaultItem.data.kids))
        console.log("Found by 'vault-tag' vault tags: " + firstVaultItem.vault_info.tags)
    }
}
```

## Retrieving by ID
```javascript
// Retrieving a vault item by ID
var vaultItemID = "EEAC6622-DA55-410A-9E31-99D2840D11DA"
var vaultItemFoundByID = vault.find(vaultItemID)

if (vaultItemFoundByID) {
    console.log("Found by 'ID' vault name: " + vaultItemFoundByID.data.name)
    console.log("Found by 'ID' vault id: " + vaultItemFoundByID.vault_info.id)
    console.log("Found by 'ID' vault currentPosition: " + vaultItemFoundByID.data.currentPosition)
    console.log("Found by 'ID' vault height: " + vaultItemFoundByID.data.height)
    console.log("Found by 'ID' vault age: " + vaultItemFoundByID.data.age)
    console.log("Found by 'ID' vault nicknames: " + vaultItemFoundByID.data.nicknames)
    console.log("Found by 'ID' vault kids: " + JSON.stringify(vaultItemFoundByID.data.kids))
    console.log("Found by 'ID' vault tags: " + vaultItemFoundByID.vault_info.tags)
}
```

## Updating
```javascript
// Updating a vault item
var vaultItemID = "EEAC6622-DA55-410A-9E31-99D2840D11DA"
var updatedVaultItem = {}
updatedVaultItem.name = "Jim Houston"
updatedVaultItem.currentPosition = "CIO"
updatedVaultItem.height = "5.82"
updatedVaultItem.age = "41"
updatedVaultItem.nicknames = ["All Knowing", "Watch Dog"]
updatedVaultItem.kids = {"Madison": "8", "Amelia": "7"}
updatedVaultItemTags = "vault-tag,vault2-tag"
vault.update(vaultItemID, JSON.stringify(updatedVaultItem), updatedVaultItemTags)
```

## Deleting
```javascript
// Deleting a vault item
var vaultItemID = "EEAC6622-DA55-410A-9E31-99D2840D11DA"
vault.destroy(vaultItemID)
```

## Contains
```javascript
// Retrieving an item that contains a value
var containsValue = "Michael"
var vaultFoundByContainsArray = vault.contains(containsValue)
        
if (vaultFoundByContainsArray.length > 0) {
    var vaultItemFoundByContains = vaultFoundByContainsArray[0]
    
    if (vaultItemFoundByContains) {
        console.log("Found by 'contains' vault name: " + vaultItemFoundByContains.data.name)
        console.log("Found by 'contains' vault currentPosition: " + vaultItemFoundByContains.data.currentPosition)
        console.log("Found by 'contains' vault height: " + vaultItemFoundByContains.data.height)
        console.log("Found by 'contains' vault age: " + vaultItemFoundByContains.data.age)
        console.log("Found by 'contains' vault nicknames: " + vaultItemFoundByContains.data.nicknames)
        console.log("Found by 'contains' vault kids: " + JSON.stringify(vaultItemFoundByContains.data.kids))
        console.log("Found by 'contains' vault tags: " + vaultItemFoundByContains.vault_info.tags)
    } else {
        console.log("Could not get first vault item from vaultFoundByContainsArray")
    }
}
```

## KeyPath
```javascript
// Retrieving an item with a matching key path
var key_path = "name"
var value = "Jim Houston"
var vaultFoundByKeyPathArray = vault.key_path(key_path, value)

if (vaultFoundByKeyPathArray.length > 0) {
    var vaultItemFoundByKeyPath = vaultFoundByKeyPathArray[0]
    
    if (vaultItemFoundByKeyPath) {
        console.log("Found by 'key_path' vault name: " + vaultItemFoundByKeyPath.data.name)
        console.log("Found by 'key_path' vault currentPosition: " + vaultItemFoundByKeyPath.data.currentPosition)
        console.log("Found by 'key_path' vault height: " + vaultItemFoundByKeyPath.data.height)
        console.log("Found by 'key_path' vault age: " + vaultItemFoundByKeyPath.data.age)
        console.log("Found by 'key_path' vault nicknames: " + vaultItemFoundByKeyPath.data.nicknames)
        console.log("Found by 'key_path' vault kids: " + JSON.stringify(vaultItemFoundByKeyPath.data.kids))
        console.log("Found by 'key_path' vault tags: " + vaultItemFoundByKeyPath.vault_info.tags)
    } else {
        console.log("Could not get first vault item from vaultFoundByKeyPathArray")
    }
} else {
    console.log("No vault items exist in vault at key_path " + key_path + " with value " + value)
}
```