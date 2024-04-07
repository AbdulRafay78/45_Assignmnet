let Guestlist: string[] = ['Rafay', 'Abdullah', 'Ubaid', 'Kinza', 'Raheem', 'Rehman', 'Aisha'];

// Print message saying only two people can be invited
console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.");

// Remove guests until only two names remain
while (Guestlist.length > 2) {
    let removedGuest: string | undefined = Guestlist.pop();
    if (removedGuest) {
        console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
    }
}

// Print invitation messages to the two remaining guests
for (let i = 0; i < Guestlist.length; i++) {
    console.log(`Repete Sir/Madam ${Guestlist[i]},\nwe invite you for dinner tomorrow.\n`);
}

// Remove the last two names from the list to make it empty
Guestlist.pop();
Guestlist.pop();

// Print to verify an empty list
console.log("Updated Guestlist:", Guestlist);
