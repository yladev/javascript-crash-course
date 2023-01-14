
console.log("THIS IS PART TWO OF JAVASCRIPT CRASH COURSE 🚀")

// Word Blank function
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = ""; // empty string
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return result;
}
const appliedFunc = wordBlanks("dog", "big", "ran", "quickly");
console.log(appliedFunc);


// List Names Function
function listNames(param1, param2, param3, param4){
    console.log(param1, param2, param3, param4);
}
listNames("zaw", "may", "thuta", "yan")


// Adding Three Numbers
function addNumber(num1, num2, num3) {
    console.log("num1", num1);
    console.log("num2", num2);
    console.log("num3", num3);
    var sum = num1 + num2 + num3;
    console.log("sum", sum);
    sum = "num1 addition is " + num1 + "\nnum2 addition is " + num2 + "\nnum3 addtion is " + num3;
    return sum;
}
console.log(addNumber(1 + 1, 2 + 2, 3 + 3));                 


// Boolean , String , number
function getStudentInfo(name, age, isMale){
    
    var studentInfo = "";

    if(isMale === true){
        studentInfo = `Student ${name} age ${age} is Male`;
    }
    else{
        studentInfo = `Student ${name} age ${age} is Female`;
    }
    return studentInfo;
}
console.log(getStudentInfo("Yanlinaung", 12, false))