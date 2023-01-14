var outerWare = "T-Shirt";

function myOutfit() {
    var outerWare = "sweater";
    return outerWare;
}
console.log("this is my local scope =>", myOutfit());
console.log("this is my global scope =>", outerWare);


var names = "Yan Linn Aung";

function anotherNames() {
    var names = "Jason Andrew";
    return names;
}
console.log("this is my local scope =>", anotherNames());
console.log("this is my global scope =>", names);