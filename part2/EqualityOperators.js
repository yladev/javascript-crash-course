// Comparision with the Equality Operator
function testEqual(val) {
    if (val == 10) {
        return "Equal";
    }
    return "Not Equal";
}
console.log("This is Strict Equality Operators =>", testEqual(10));

// Comprassion with the Inequality Operator
function result(value) {
    if (value != 400) {
        return true;
    } 
    return false;
}
console.log("This is Inequality Operators =>", result(400));

// Comparision with the Strict Equality Operator
/*
2 === 2 (true)
2 === '2' (false)
*/
function testStrict(number) {
    if (number === 10) {
        return "Equal";
    }
    return "Not Equal";
}
console.log("This is Strict Equality Operators =>", testStrict(10));

function strictEqualityOp(myVal) {
    if (myVal === '20') {
        return true;
    }
    return false;
}
console.log("This is Strict Equality Operators =>", strictEqualityOp(20));

// Comparison with the Strict Inequality operator
function strictInEqualityOp(myValue) {
    if (myValue !== 10) {
        return true;
    }
    return false;
}
console.log("This is Strict Inequality Operator =>", strictInEqualityOp(100));

// Practice comparing different values
function compareEquality(a, b) {
    if (a == b) {
        return true;
    }
    return false;
}
console.log("This is Compare Equality Operator =>", compareEquality(30, "30"));

function compareStrictEquality(c, d) {
    if (c === d) {
        return true;
    }
    return false;
}
console.log("This is Compare Strict Equality Operator =>", compareStrictEquality(10, "10"));