function makeBurger() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Burger Summary:");
    if (items.length === 0) {
        console.log("This Burger has no items.");
    }
    else {
        console.log("This Burger contains:");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("- " + item);
        }
    }
    console.log();
}
makeBurger('Patty', 'Cheese', 'Lettuce');
makeBurger('Patty', 'Cheese');
makeBurger('Patty', 'Cheese', 'Lettuce', 'Ketchup');
