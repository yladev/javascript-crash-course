function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// another code
const obj = {
    name : "Yan Linn Aung",
    age : 17,
    gender : "Male",
    education : "Level-Three Diploma in Computing",    
}
const myJSON = JSON.stringify(obj);
console.log(myJSON);