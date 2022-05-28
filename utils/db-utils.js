export async function getAllCountries() {
  return fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region"
  )
    .then((response) => response.json())
    .then((data) => {
      const filteredData = [];
      data.forEach((item) => {
        return filteredData.push({
          name: item.name.common,
          population: item.population,
          region: item.region,
          flag: item.flags.png,
          capital: item.capital || "Capital missing",
        });
      });

      return filteredData;
    });
}

export function getFullBorderName(countries) {
  const getCountryISO2 = require("country-iso-3-to-2");
  const fullBorderName = countries.map((item) => {
    const twoISO = getCountryISO2(item);
    const countryName = new Intl.DisplayNames(["en"], { type: "region" });
    return countryName.of(twoISO);
  });
  return fullBorderName;
}
