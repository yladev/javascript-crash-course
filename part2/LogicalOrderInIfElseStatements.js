function logicalOrderInIfElseStatement(val) {
    if (val < 11) {
        return true;
    } else if (val < 14) {
        return "Less than 14";
    } else {
        return false;
    }

}
console.log("This is Logical Order In If Else Statement =>", logicalOrderInIfElseStatement(10));

function orderMyLogic(value) {
    if (value < 5) {
        return "Less than 5";
    } else if (value < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
console.log("This is Logical Order In If Else Statement =>", orderMyLogic(3));