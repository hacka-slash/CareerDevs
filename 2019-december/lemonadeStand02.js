// create an array of lemonade flavors
// create an array for each flavor sold
// create an array for lemonade sizes
// create an array of each sizes price
// create a variable for tax 0.07%
// output should give each flavors name^, how many sizes were sold for each flavor individually^ and total drinks sold per flavor^,  how much each flavor made in revenue^, total revenue from all the lemonades^
let lemonadeFlavors = ["Lemon", "Watermelon", "Mix", "Cherry", "Tigers' Blood"]; // 5 total indexes
let flavorsSold = [8, 11, 14, 7, 18]; // total for each flavor that was sold
let lemonadeSizes = ["Kiddie", "Small", "Medium", "Large", "X-Large"];
let sizesPrice = [.5, 1, 1.75, 2.25, 2.5];
let sizeSoldPerFlavor = [
    [0, 2, 5, 0, 1],
    [4, 2, 3, 1, 1],
    [0, 1, 6, 5, 2],
    [3, 1, 2, 1, 0],
    [1, 5, 8, 2, 2]
];
let tax = .07;
let totalRevenue = 0; // created this variable so that i could assign and output the total revenue at the very end of the console

for (i = 0; i < sizeSoldPerFlavor.length; i++) {

    let totalPerFlavorSale = 0; // created this variable so that i could assign and output the total revenue for an individual flavor

    for (c = 0; c < sizeSoldPerFlavor[i].length; c++) {

        let sales = (sizesPrice[c] * sizeSoldPerFlavor[i][c]) + (sizesPrice[c] * sizeSoldPerFlavor[i][c] * tax);

        totalRevenue += sales; // assigns the value of 'sales' to our global value 'totalRevenue'

        console.log("The " + "'" + lemonadeFlavors[i] + "'" + " flavored lemonade sold " + sizeSoldPerFlavor[i][c], "'" + lemonadeSizes[c] + "'" + " sized drinks and made $" + ((sizesPrice[c] * sizeSoldPerFlavor[i][c]) + (sizesPrice[c] * sizeSoldPerFlavor[i][c] * tax)).toFixed(2));

        let salesPerFlavor = (sizesPrice[c] * sizeSoldPerFlavor[i][c]) + (sizesPrice[c] * sizeSoldPerFlavor[i][c] * tax);

        totalPerFlavorSale += salesPerFlavor; // assigns the value of 'salesPerFlavor' to 'totalPerFlavorSale' so i could then output the total revenue for each                                          flavor
    }

    console.log(lemonadeFlavors[i] + " sold a total of " + flavorsSold[i] + " drinks and brought in $" + totalPerFlavorSale.toFixed(2) + " in revenue.\n");
    // total drinks sold for x flavor, outputs last in the console
}
console.log("The total revenue brought in from this lemonade stand was $" + totalRevenue.toFixed(2) + ".");

//! using .toFixed(x) will set the decimals that are presented to whatever 'x' is set to