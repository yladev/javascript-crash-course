function chainToSwitch(val) {
    var answer = "";
    switch (val) {
        case "bob":
            answer = "JoJo";
            break;
        case 17:
            answer = "Jason Andrew";
            break;
        case "Andrew":
            answer = 17;
            break;
        case "Yan":
            answer = "Andrew";
            break;
        case 2023:
            answer = "Jason Andrew is 18 years old.";
            break;
        case "Wein Family":
            answer = true;
            break;
        default:
            break;
    }
    return answer
}
console.log(chainToSwitch("Wein Family"));