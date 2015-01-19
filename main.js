var victims = prompt("Please enter the number of disaster victims.");

var arrName = [];
var arrPhone = [];
var arrStreet = [];


for(var i=0; i<victims; i++) {
    // Victim Name //
    var vName = prompt("Please enter your name");
    arrName.push(vName);
    console.log(arrName);

    // Victim Phone //
    var vPhone = prompt("Please enter your phone");
    arrPhone.push(vPhone);
    console.log(arrPhone);

    // Victim Street //
    var vStreet = prompt("Please enter your street number");
    arrStreet.push(vStreet);
    console.log(arrStreet);

    // Generate Alert //
    alert("Name: " + arrName[i]+ "\nPhone: " + arrPhone[i] + "\nStreet: " + arrStreet[i]);
};




