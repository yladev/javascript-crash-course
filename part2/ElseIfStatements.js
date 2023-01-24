function testElseIfStatement(myValue) {
    if (myValue > 115) {
        return false;
    } else if (myValue >= 99) {
        return true;
    } else {
        return invalidNumber;
    }
}
console.log("This is Else If Statement =>", testElseIfStatement(100));

function elseIfStatement(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Invalid Number";
    }
}
console.log("This is Els If Statement =>", elseIfStatement(7));