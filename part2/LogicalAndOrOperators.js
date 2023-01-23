// Comparison with the Logical And Operator
function logicalAndOperator(myValue) {
    if (myValue == 10 && myValue < 15) {
        return true;
    }
    return false;
}
console.log("This is logical And operator =>", logicalAndOperator(10));

function testLogicalAndOperator(Value) {
    if (Value <= 10 && Value >= 15) {
        return true;
    }
    return false;
}
console.log("This is logical And operator =>", testLogicalAndOperator(10));

// Comparison with the Logical Or Operator
function logicalOrOperator(myVal) {
    if (myVal != "235" || myVal === 235) {
        return true;
    }
    return false;
}
console.log("This is logical Or operator =>", logicalOrOperator(235));

function testLogicalOrOperator(Val) {
    if (Val === "400" || Val != 400) {
        return true;
    }
    return false;
}
console.log("This is logical Or operator =>", testLogicalOrOperator(400));