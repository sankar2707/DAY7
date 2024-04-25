function getTotalPopulation(countries) {
    const totalPopulation = countries.reduce((acc, curr) => {
        return acc + curr.population;
    }, 0);
    return totalPopulation;
}
let countryData = [
    { name: 'USA', population: 20000000 },
    { name: 'India', population: 132644989 },
    { name: 'Brazil', population: 25415464 },
];

let totalPop = getTotalPopulation(countryData);
console.log(`Total population: ${totalPop}`);
