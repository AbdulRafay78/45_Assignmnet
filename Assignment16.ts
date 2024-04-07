let Guestlist = ['Rafay', 'Abdullah', 'Ubaid', 'Kinza'];

console.log("Good news! We found a bigger dinner table.\n");

Guestlist.unshift('Raheem');

const middleIndex = Math.floor(Guestlist.length / 2);
Guestlist.splice(middleIndex, 0, 'Rehman');

Guestlist.push('Aisha');

for (let i = 0; i < Guestlist.length; i++) {
    console.log(`Repete Sir/Madam ${Guestlist[i]},\nwe invite you for dinner tomorrow.\n`);
}
