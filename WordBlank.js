
// Word Blank function
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
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
