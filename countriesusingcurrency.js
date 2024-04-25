let countries = [
    { name: 'United States', currency: 'USD' },
    { name: 'Ecuador', currency: 'USD' },
    { name: 'El Salvador', currency: 'USD' },
    { name: 'Zimbabwe', currency: 'USD' },
    { name: 'India', currency: 'Rupees'},
    ];
  
  const dollarizedCountries = countries.filter(country => country.currency === 'USD');
  
  console.log(dollarizedCountries.map(country => country.name));
  