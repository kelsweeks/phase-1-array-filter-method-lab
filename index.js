function findMatching (array, name) {
    let result = array.filter(function(item) {
        return item.toLowerCase() === name.toLowerCase()
    })
    return result
}

function fuzzyMatch (array, name) {
    let result = array.filter(function(item) {
        return item.indexOf(name) === 0
    })
    return result
}

function matchName (array, driver) {
    let result = array.filter(function(item) {
        return item.name === driver
    })
    return result
}