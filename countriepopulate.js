let countriepopulation = [
    { name: "India", population: 20000 },
    { name: "China", population: 400000 },
    { name: "USA", population: 4200000 },
    { name: "Brazil", population: 126546 },
    { name: "Nigeria", population: 145458 },
    { name: "Bangladesh", population: 2584684 },
    { name: "Russia", population: 8656494 },
    { name: "Japan", population: 15416465 },
    { name: "Mexico", population: 9656416 },
    { name: "Pakistan", population: 220892340 },
];
let filteredCountries = countriepopulation.filter(country => country.population < 1000000);

filteredCountries.forEach(country => {
    console.log(`${country.name} has a population of ${country.population} (less than 2 lakhs).`);
});
