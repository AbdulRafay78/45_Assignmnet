var current_users = ['john', 'alice', 'bob', 'emma', 'sam'];
var new_users = ['mary', 'jane', 'John', 'sarah', 'emily'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    // Convert both usernames to lowercase for case-insensitive comparison
    var lowercase_new_user = new_user.toLowerCase();
    // Check if the lowercase version of the new username is in the lowercase version of current usernames
    if (current_users.map(function (user) { return user.toLowerCase(); }).includes(lowercase_new_user)) {
        console.log("Sorry, ".concat(new_user, ", that username is already taken. Please choose a different one."));
    }
    else {
        console.log("Congratulations, ".concat(new_user, ", the username is available!"));
    }
}
