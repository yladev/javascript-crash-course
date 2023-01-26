var names = [
    "Hole-in-one!", // 0
    "Eagle", // 1
    "Birdie", // 2
    "Par", // 3
    "Bogey", // 4
    "Double Bogey", // 5
    "Go Home" // 6
];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par-2) {
        return  names[1]
    } else if (strokes == par-1) {
        return names[2]
    } else if (strokes == par) {
        return names[3]
    } else if (strokes == par + 1) {
        return names[4]
    } else if (strokes == par + 2) {
        return names[5]
    } else if (strokes >= par + 3) {
        return names[6]
    }
}

console.log(golfScore(1, 1));
console.log(golfScore(6, 4));
console.log(golfScore(5, 4));
console.log(golfScore(0, 0));
console.log(golfScore(6, 7));
console.log(golfScore(7, 9));
console.log(golfScore(10, 13));