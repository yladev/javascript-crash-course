// Double Bracket Notation
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1]; // first bracket === first element in the array, // second bracket === the index of the array within array
console.log("this is access multi-dimensional arrays =>", myData);

var yourArray = [[11,12,14], [88,77,66], [55,7,22], [[20,45,66], 66, 77]];
var yourData = yourArray[2][1]; // first bracket === first element in the array, // second bracket === the index of the array within array
console.log("this is access multi-dimensional arrays =>", yourData);