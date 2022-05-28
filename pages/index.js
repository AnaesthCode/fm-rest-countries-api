import CountryCard from "../components/country-card/country-card";
import SelectInput from "../components/inputs/select-input";
import SearchInput from "../components/inputs/search-input";
import { useState } from "react";
import Head from "next/head";

import { getAllCountries } from "../utils/db-utils";
const HomePage = (props) => {
  const [countries, setCountries] = useState(props.countries);

  const getCountriesByRegion = (region) => {
    if (!region || region.length === 0) {
      setCountries(props.countries);
      return;
    } else {
      const countryByRegion = props.countries.filter(
        (country) => country.region === region
      );
      console.log(countryByRegion);
      setCountries(countryByRegion);
    }
  };

  const getCountriesBySearch = (letters) => {
    if (!letters || letters.trim() === "") {
      setCountries(props.countries);
      return;
    }
    const countryBySearch = props.countries.filter((country) => {
      return country.name.toLowerCase().includes(letters.toLowerCase());
    });
    setCountries(countryBySearch);
  };

  return (
    <>
      <Head>
        <meta name="description" content="Browse through all countries" />
      </Head>
      <div className="relative mb-6 md:px-16 lg:px-10 flex justify-between flex-col md:flex-row">
        <SearchInput onCountryBySearch={getCountriesBySearch} />
        <SelectInput onCountryByRegion={getCountriesByRegion} />
      </div>

      <div className="flex flex-col justify-center lg:justify-around items-center md:flex-row flex-wrap">
        {countries.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const countries = await getAllCountries();

  return {
    props: { countries: countries },
  };
}

export default HomePage;
