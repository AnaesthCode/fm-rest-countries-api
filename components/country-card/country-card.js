import Image from "next/image";
import Link from "next/link";

const CountryCard = (props) => {
  const { country } = props;
  return (
    <>
      <Link href={`/country/${country.name}`}>
        <section
          className="flex w-10/12 flex-col justify-center rounded-lg shadow-lg 
    hover:scale-105
    hover:cursor-pointer
    hover:ease-in duration-100
    dark:shadow-xl dark:bg-dark-mode-elements mb-10 md:w-2/5 md:mx-4 lg:w-1/5"
        >
          <figure className="w-full ">
            <Image
              src={country.flag}
              alt={country.name}
              width={300}
              height={180}
              layout="responsive"
            ></Image>
          </figure>
          <article className="py-8 px-6 md:py-6 h-56 md:h-48">
            <h2 className="font-bold text-lg md:text-base mb-5">
              {country.name}
            </h2>
            <ul className="text-sm ">
              <li key="1" className="mb-3 md:mb-2">
                <span className="font-semibold">Population: </span>{" "}
                {country.population.toLocaleString("en-US")}
              </li>
              <li key="2" className="mb-3 md:mb-2">
                <span className="font-semibold">Region: </span>
                {country.region}
              </li>
              <li key="3" className="mb-3 md:mb-2">
                <span className="font-semibold">Capital: </span>
                {country.capital}
              </li>
            </ul>
          </article>
        </section>
      </Link>
    </>
  );
};

export default CountryCard;
