import Image from "next/image";
import InfoList from "./info-list";
import Loader from "../icons/loader";
import ErrorIcon from "../icons/error-icon";
import { useState, useEffect } from "react";
import { getFullBorderName } from "../../utils/db-utils";

const ExtendedCard = (props) => {
  const [countryInfo, setCountryInfo] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { country } = props;

  useEffect(() => {
    setIsLoading(true);
    const filter =
      "flags,nativeName,name,borders,languages,population,region,subregion,capital,topLevelDomain,currencies";
    fetch(`https://restcountries.com/v2/name/${country}?fields=${filter}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        return response.json();
      })
      .then((data) => {
        const [country] = data;
        const fullBorderName = getFullBorderName(country.borders);
        const updatedData = { ...country, borders: fullBorderName };
        setCountryInfo(updatedData);
        console.log(updatedData);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [country]);

  if (isLoading) {
    return <Loader />;
  }

  if (!countryInfo) {
    return (
      <div className="w-screen h-44 flex justify-center items-center ">
        <ErrorIcon />
        <p className="text-xl ml-10">
          No data could be found for that country...
        </p>
      </div>
    );
  }
  return (
    <section className="w-full flex px-4 flex-col justify-evenly md:flex-row  md:px-0 md:items-center">
      <div className="mb-8 md:mb-0 md:mr-10">
        <Image
          src={countryInfo.flags.png}
          alt={countryInfo.name.common}
          width={550}
          height={350}
        />
      </div>
      <InfoList country={countryInfo} />
    </section>
  );
};

export default ExtendedCard;
