function linierSearch (arr, target) {
    if (typeof target !== 'number') {
        return 'input harus number'; 
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return target;
        }
    }
    return false;
}

console.log(linearSearch([8, 3, 9, 2, 5], 3));
console.log ()