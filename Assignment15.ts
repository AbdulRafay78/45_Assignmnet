let Guestlist: string[] = ['Rafay', 'Abdullah', 'Ubaid', 'Kinza'];

for (let i = 0; i < Guestlist.length; i++) {
    console.log(`Repete Sir/Madam ${Guestlist[i]},\nwe invite you for dinner tomorrow.\n`);
}

let unavailable: string = 'Ubaid';
let available: string = 'Raheem';
Guestlist[1] = available;

for (let i = 0; i < Guestlist.length; i++) {
    console.log(`Repete Sir/Madam ${Guestlist[i]},\nwe invite you for dinner tomorrow.\n`);
}

console.log(`Mr. ${unavailable} will not be coming for tomorrow's dinner.`);
