// VICTIMS //

var victimCount = prompt("Please enter the number of disaster victims.");
var arrVictim = [];

for(var i=0; i<victimCount; i++) {
    var victimName = prompt("Please enter the victim's name");
    var victimPhone = prompt("Please enter the victim's phone");
    var victimStreet = prompt("Please enter the victim's street number");

    arrVictim.push({"name":victimName, "phone":victimPhone, "street":victimStreet});

};

// VOLUNTEERS //

var volCount = prompt("Please enter the number of disaster volunteers.");
var arrVol = [];

for(var i=0; i<volCount; i++) {
    var volName = prompt("Please enter the volunteer's name");
    var volPhone = prompt("Please enter the volunteer's phone");
    var volStreet = prompt("Please enter the volunteer's street number");

    arrVol.push({"name":volName, "phone":volPhone, "street":volStreet});

};


// MESSAGE //

var message = "Number of Victims: " + victimCount + "\n" +
    "Number of Volunteers: " + volCount + "\n";

message += "\nVictims\n";
for(var i=0; i<victimCount; i++) {
    message += "Name: " + arrVictim[i].name + "\nPhone: " + arrVictim[i].phone + "\nStreet: " + arrVictim[i].street + "\n";
};

message += "\nVolunteers\n";
for(var i=0; i<volCount; i++) {
    message += "Name: " + arrVol[i].name+ "\nPhone: " + arrVol[i].phone + "\nStreet: " + arrVol[i].street + "\n";
};

alert(message);