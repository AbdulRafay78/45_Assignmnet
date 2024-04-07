var Guestlist = ['Rafay', 'Abdullah', 'Ubaid', 'Kinza'];
for (var i = 0; i < Guestlist.length; i++) {
    console.log("Repete Sir/Madam ".concat(Guestlist[i], ",\nwe invite you for dinner tomorrow.\n"));
}
var unavailable = 'Ubaid';
var available = 'Raheem';
Guestlist[1] = available;
for (var i = 0; i < Guestlist.length; i++) {
    console.log("Repete Sir/Madam ".concat(Guestlist[i], ",\nwe invite you for dinner tomorrow.\n"));
}
console.log("Mr. ".concat(unavailable, " will not be coming for tomorrow's dinner."));
