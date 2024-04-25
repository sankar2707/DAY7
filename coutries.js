let countries = [
    { name: 'India', region: 'Asia' },
    { name: 'Japan', region: 'Asia' },
    { name: 'Russia', region: 'North Asia'},
    { name: 'Unites states', region: 'North America'},
  ];
  
  let asiaCountries = countries.filter((country) => country.region === 'North Asia');
  console.log(asiaCountries);
  