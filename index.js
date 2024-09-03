function linierSearch (array, target) {
    if (typeof target !== 'number') {
        return 'input harus number'; 
    }

    let 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return false;
}

console.log(linierSearch([8, 3, 9, 2, 5], 3));