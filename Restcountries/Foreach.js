let details = [
    {
        "name": "Canada",
        "capital": "Ottawa",
        "flag": "🇨🇦"
    },
    {
        "name": "United States",
        "capital": "Washington, D.C.",
        "flag": "🇺🇸"
    },
    {
        "name": "United Kingdom",
        "capital": "London",
        "flag": "🇬🇧"
    }
];
details.forEach((country) => {
    console.log(`Name: ${country.name}, Capital: ${country.capital}, Flag: ${country.flag}`);
});
