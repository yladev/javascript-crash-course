function  myLocalScope() {
    var myVar = 5;
    console.log("this is myVar =>", myVar);
}
myLocalScope();

function localScope() {
    var ourVar = 5 * 5;
    console.log("this is ourVar =>", ourVar);
}
localScope();