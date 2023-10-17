// import the function sum from the app.js file
const { sum, euroToUsd, fromEuroToUsd, fromDollarToYen, fromYenToPound } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(sum(14, 9)).toBe(23);
});
test("sum, and fromEuroToUsd", () => {
    expect(fromEuroToUsd(5)).toBe(6);
});



test("sum, and fromDollarToYen", () => {
    expect(fromDollarToYen(2)).toBe(227.22);
});

test("sum, and fromYenToPound", () => {
    expect(fromYenToPound(2)).toBe(0.0138);
});