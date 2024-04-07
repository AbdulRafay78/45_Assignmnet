let current_users: string[] = ['john', 'alice', 'bob', 'emma', 'sam'];
let new_users: string[] = ['mary', 'jane', 'John', 'sarah', 'emily'];

for (let new_user of new_users) {
    // Convert both usernames to lowercase for case-insensitive comparison
    let lowercase_new_user = new_user.toLowerCase();

    // Check if the lowercase version of the new username is in the lowercase version of current usernames
    if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_user)) {
        console.log(`Sorry, ${new_user}, that username is already taken. Please choose a different one.`);
    } else {
        console.log(`Congratulations, ${new_user}, the username is available!`);
    }
}
