// this is my function that sums two numbers
const sum = (a, b) => {
    return a + b
}

function fromDollarToYen(yen) {
    if (yen < 0) {
        console.log("negative values not allowed")
        return
    }
    return yen * 113.61
};

console.log("fromDollarToYen")

function fromEuroToUsd(euro) {
    if (euro < 0) {
        console.log("negative values not allowed")
        return
    }
    return euro * 1.2
};

console.log("fromEuroToUsd")

function fromYenToPound(pound) {
    if (pound < 0) {
        console.log("negative values not allowed")
        return
    }
    return pound * 0.0069
};
console.log("fromYenToPound")

module.exports = { sum, fromYenToPound, fromEuroToUsd, fromDollarToYen };