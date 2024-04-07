var Guestlist = ['Rafay', 'Abdullah', 'Ubaid', 'Kinza'];
console.log("Good news! We found a bigger dinner table.");
Guestlist.unshift('Raheem');
var middleIndex = Math.floor(Guestlist.length / 2);
Guestlist.splice(middleIndex, 0, 'Rehman');
Guestlist.push('Aisha');
// Print invitation messages for each person in the updated list
for (var i = 0; i < Guestlist.length; i++) {
    console.log("Repete Sir/Madam ".concat(Guestlist[i], ",\nwe invite you for dinner tomorrow.\n"));
}
