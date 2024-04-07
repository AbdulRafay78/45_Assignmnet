"use strict";
let personName = "Abdul Rafay";
console.log(personName.toLowerCase());
console.log(personName.toLocaleUpperCase());
console.log(personName.replace(/\bw/g, c => c.toUpperCase()));
