function linierSeacrh(arr, target) {
    if (typeof target !== "number") {
        return "Inputan harus number";
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return target;
        }
    }

    return false;
}

console.log(linierSeacrh([8, 3, 9, 2, 5], 3));
console.log(linierSeacrh([8, 3, 9, 2, 5], 1));
console.log(linierSeacrh([8, 3, 9, 2, 5], "h"));