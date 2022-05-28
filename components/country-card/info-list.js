import Link from "next/link";

const InfoList = (props) => {
  const { country } = props;

  return (
    <div className="py-2 md:w-5/12">
      <h1 className="text-2xl font-bold mb-4">{country.name}</h1>
      <div className="md:flex md:flex-row mb-8">
        <ul className="mb-4 md:mb-0 md:mr-8">
          <li key="1" className="text-sm py-1">
            <span className="text-sm font-semibold">Native Name: </span>
            {country.nativeName}
          </li>
          <li key="2" className="text-sm py-1">
            <span className="text-sm font-semibold">Population: </span>
            {country.population.toLocaleString("en-US")}
          </li>
          <li key="3" className="text-sm py-1">
            <span className="text-sm font-semibold">Region: </span>
            {country.region}
          </li>
          <li key="4" className="text-sm py-1">
            <span className="text-sm font-semibold">Sub region: </span>
            {country.subregion}
          </li>
          <li key="5" className="text-sm py-1">
            <span className="text-sm font-semibold">Capital: </span>{" "}
            {country.capital}
          </li>
        </ul>
        <ul>
          <li key="6" className="text-sm py-1">
            <span className="text-sm font-semibold">Top Level Domain: </span>{" "}
            {country.topLevelDomain}
          </li>
          <li key="7" className="text-sm py-1">
            <span className="text-sm font-semibold">Currencies: </span>{" "}
            {country.currencies.map((item) => item.name)}
          </li>
          <li key="8" className="text-sm py-1">
            <span className="text-sm font-semibold">Languages: </span>
            {country.languages.map((item) => item.name)}
          </li>
        </ul>
      </div>
      <div className="w-fit h-28 lg:h-20 flex flex-row flex-wrap">
        <h2 className="inline-block text-sm font-semibold mt-1">
          Border Countries:{" "}
        </h2>
        {country.borders.map((item, index) => {
          return (
            <div
              key={index}
              className="ml-2 px-4 min-w-28 h-8 py-1  text-center rounded-sm
             shadow-[0_0px_2px_-1px_hsl(200,15%,8%)]
        text-light-mode-text dark:bg-dark-mode-elements dark:text-dark-mode-text-light-elements"
            >
              <Link href={`/country/${item}`}>{item}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoList;
