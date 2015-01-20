
// #1 tripleFive//
// var tripleFive = function(x) {
//     return x;
// };
//
// for (var z=0; z<3; z++) {
//     var result = tripleFive("Five!");
//     console.log(result);
// }


// #2 lastLetter //
// var lastLetter = function(x) {
//     return x.charAt(x.length-1);
// };
// var result = lastLetter("Super");
// console.log(result);


// #3 square //
// var square = function(x) {
//     return x * x;
// };
// var result = square(5);
// console.log(result);


// #4 negate //
// var negate = function(x) {
//     return x * -1;
// };
// var result = negate(8);
// console.log(result);


// #5 toArray //
// var toArray = function(x,y,z) {
//     return [x,y,z];
// };
// var result = toArray(1,4,5);
// console.log(result);


// #6 startsWithA //
// var startsWithA = function(x) {
//     return x.charAt(0) === "A";
// };
// var result = startsWithA("Badger");
// console.log(result);


// #7 excite //
// var excite = function(x) {
//     return x + "!!!";
// };
// var result = excite("Yes");
// console.log(result);


// #8 sun //
// var sun = function(x) {
//     return x.indexOf('sun') === 0;
// };
// var result = sun("sunday");
// console.log(result);


// #9 tiny //
// var tiny = function(x) {
//     return x  > 0 && x < 1;
// };
// var result = tiny(-5);
// console.log(result);


// #10 getSeconds //
var getSeconds = function(x) {
    return parseFloat(x.substring(0,2)*60) + parseFloat(x.substring(3,5));
};
var result = getSeconds("01:30");
console.log(result);