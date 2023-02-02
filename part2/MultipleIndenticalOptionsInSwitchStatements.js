function sequential(value) {
    var answer = "";
    switch (value) {
        case 1:
        case 2:
        case 3:
            answer = "Jason";
            break;
    
        case 4:
        case 5:
        case 6:
            answer = "Andrew";
            break;
        
        case 7:
        case 8:
        case 9:
            answer = 17;
            break; 

        default:
            answer = "2005";
            break;
    }
    return answer;
}
console.log(sequential(6));