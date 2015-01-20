// VICTIMS //

var victimName = [];
var victimPhone = [];
var victimStreet = [];

var victimCount = prompt("Please enter the number of disaster victims.");

for(var i=0; i<victimCount; i++) {

    victimName.push(prompt("Please enter the victim's name"));
    victimPhone.push(prompt("Please enter the victim's phone"));
    victimStreet.push(prompt("Please enter the victim's street number"));
};

// VOLUNTEERS //

var volName = [];
var volPhone = [];
var volStreet = [];

var volCount = prompt("Please enter the number of disaster volunteers.");

for(var i=0; i<volCount; i++) {

    volName.push(prompt("Please enter the volunteer's name"));
    volPhone.push(prompt("Please enter the volunteer's phone"));
    volStreet.push(prompt("Please enter the volunteer's street number"));
};

// MESSAGE //

var message = "Number of Victims: " + victimCount + "\n" +
    "Number of Volunteers: " + volCount + "\n";

message += "\nVictims\n";
for(var i=0; i<victimCount; i++) {
    message += "Name: " + victimName[i]+ "\nPhone: " + victimPhone[i] + "\nStreet: " + victimStreet[i] + "\n";
}

message += "\nVolunteers\n";
for(var i=0; i<volCount; i++) {
    message += "Name: " + volName[i]+ "\nPhone: " + volPhone[i] + "\nStreet: " + volStreet[i] + "\n";
}



alert(message);