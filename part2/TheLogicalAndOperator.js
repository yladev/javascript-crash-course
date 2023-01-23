// Comparisons with the logical And Operator
function logicalOrOperator(e) {
    if (e > 100) {
        return "Over 100";
    }
    if (e > 10) {
        return "Over 10";
    }
    return "10 or Under";
}
console.log("This is the logical operator =>", logicalOrOperator(10));