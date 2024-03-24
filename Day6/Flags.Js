// Fetch data from the API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // a) Get all the countries from Asia continent /region using Filter function
    let asiaCountries = data.filter(country => country.region == 'Asia');

    // b) Get all the countries with a population of less than 2 lakhs using Filter function
    let smallPopulationCountries = data.filter(country => country.population < 200000);
    console.log("\nCountries with a population of less than 2 lakhs:");

    // c)Print the following details name, capital, flag, using forEach function
    asiaCountries.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital ? country.capital[0] : "N/A");
      console.log("Flag:", country.flags.svg);
    });

    // d)Print the total population of countries using reduce function
    let totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log("Total population:", totalPopulation);

    // e)Print the country that uses US dollars as currency.
    let USDCountry = data.find(country => country.currencies['USD']);
    if (USDCountry) {
      console.log("Country that uses US dollars:", USDCountry.name.common);
    } else {
      console.log("No country uses US dollars.");
    }
  })
  .catch(error => console.error('Error fetching data:', error));    