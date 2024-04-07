function makeShirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("Shirt size: ".concat(size.toUpperCase(), ", Message: \"").concat(message, "\""));
}
makeShirt();
makeShirt('medium');
makeShirt('small', 'Keep calm and code on!');
