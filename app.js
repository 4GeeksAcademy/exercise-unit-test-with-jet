
// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07, // US dollar
    "GBP": 0.87, // British pound
};

function fromDollarToYen(dollars) {
    return (dollars / oneEuroIs["USD"]) * oneEuroIs["JPY"];
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}

function fromYenToPound(yen) {
    return (yen / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound, sum };

test("One euro should be 1,56 yen", () => {
    const yen = fromDollarToYen(5);
    const expected = (5 / 1.07) * 156.5; 
    expect(yen).toBeCloseTo(expected, 2);
});

test("One euro should be 0,87 yen", () => {
    const pounds = fromYenToPound(1000);
    const expected = (1000 / 156.5) * 0.87;
    expect(pounds).toBeCloseTo(expected, 2);
});