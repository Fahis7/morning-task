const order = [200, 450, 130, 50, 1000, 20];
let order1 = order.forEach((val) => {
    console.log(val)
})
console.log(order1);

let order2 = order.filter((val) => val > 100)
console.log(order2);

let order3 = order.map((val) => val - 10)
console.log(order3);

let order4 = order3.reduce((a, b) => sum = a + b)
console.log(order4);