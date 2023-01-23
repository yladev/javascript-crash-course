function elseStatement(myValue) {
    var result = "";
    if (myValue > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller"
    }
    return result;
}
console.log("This is Else Statement =>", elseStatement(4)); 

function testElseStatement(Value) {
    var answer = "";
    if (Value =! 20) {
        answer = false;
    } else {
        answer = true;
    }
    return answer;
}
console.log("This is Else Statement =>", testElseStatement(20));