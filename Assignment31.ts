let usernames: string[] = ['admin', 'Eric', 'Alice', 'Bob', 'John'];

if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let username of usernames) {
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}

// Removing all usernames
usernames = [];

if (usernames.length === 0) {
    console.log("We need to find some users!");
}
