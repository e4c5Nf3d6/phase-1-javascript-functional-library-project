function myEach(collection, callback) {
    for (const element of Object.values(collection)) {
        callback(element)
    }
    return collection
}

function myMap(collection, callback) {
    let data = [...Object.values(collection)]
    for (let i = 0; i < data.length; i++) {
        data[i] = callback(data[i])
    }
    return data
}

function myReduce(collection, callback, acc) {
    let data = Object.values(collection)
    for (let i = 0; i < data.length; i++) {
        if (acc) {
            acc = callback(acc, data[i], collection)
        } else {
            acc = data[0]
        }
    }
    return acc
}

function myFind(collection, predicate) {
    let data = Object.values(collection)
    for (let i = 0; i < data.length; i++) {
        if (predicate(data[i])) {
            return data[i]
        }
    }
    return undefined
}

function myFilter(collection, predicate) {
    const filtered = []
    let data = Object.values(collection)
    for (let i = 0; i < data.length; i++) {
        if (predicate(data[i])) {
            filtered.push(data[i])
        }
    }
    return filtered
}

function mySize(collection) {
    return Object.values(collection).length
}

function myFirst(array, n) {
    if(n) {
        return array.slice(0, n)
    } else {
        return array[0]
    }
}

function myLast(array, n) {
    if(n) {
        return array.slice(array.length - n)
    } else {
        return array[array.length - 1]
    }
}

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}