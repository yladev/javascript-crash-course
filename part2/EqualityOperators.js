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

// Comparison with the logical And Operator
function logicalAndOperator(e) {
    if (e > 100) {
        return "Over 100";
    }
    if (e > 10) {
        return "Over 10";
    }
    return "10 or Under";
}
console.log("This is the logical And operator =>", logicalAndOperator(10));

// Comprassion with the Greater Than Or Equal To Operator
function greaterThanOrEqualToOp(f) {
    if (f >= 200) {
        return false;
    }
    if (f >= 125) {
        return true;
    }
    return "Invalid Number";
}
console.log("This is the greater or equal to operator =>", greaterThanOrEqualToOp(125));

// Comprassion with the Less Than Operator
function lessThanOp(g) {
    if (g < 15) {
        return false;
    }
    if (g < 21) {
        return true;
    }
    return "Invalid Number";
}
console.log("This is less than operator =>", lessThanOp(20));

// Comprassion with the Less Than Or Equal To Operator
function lessThanOrEqualToOp(h) {
    if (h <= 40) {
        return true;
    }
    if (h <= 10) {
        return false;
    }
    return "Invalid Number";
}
console.log("This is less than or equal to operator =>", lessThanOrEqualToOp(15));