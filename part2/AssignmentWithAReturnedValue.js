var age = 0;

function change(num) {
    return (num + 5) / 5 // 11
}
age = change(50); 
console.log("this is assignment with a returned value =>",age);

var processed = 0;

function processeArg(num) {
    return (num - 6) / 9
}
processed = processeArg(60);
console.log("this is assignment with a returned value =>", processed);