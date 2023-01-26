function defaultOptionInSwitchStatement(fruits) {
    var answer = "";
    switch (fruits) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "banana";
            break;
        case "m":
            answer = "mango";
            break;
        case "o":
            answer = "orange";
            break;
        case "p":
            answer = "pineapple";
            break;
        case "l":
            answer = "lemon";
            break;
        default:
            answer = "There is empty fruits";
            break;
    }
    return answer;
}
console.log("This is default option in switch statement =>", defaultOptionInSwitchStatement("p"));;
console.log("This is default option in switch statement =>", defaultOptionInSwitchStatement(9));