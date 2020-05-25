function map(array, callBack) {
    const results = [];
    for (let i = 0; i< array.length; i++) {
        results.push(callBack(array[i]))
    }
    return results;
}

module.exports = {map}
