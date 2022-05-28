import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";

import Loader from "../../components/icons/loader";
import BackArrow from "../../components/icons/back-arrow";
import ExtendedCard from "../../components/country-card/extended-card";

const CountryPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const countryParam = router.query.countryId;
  console.log(countryParam);

  const goBackHandler = () => {
    setIsLoading(true);
    router.replace("/");
  };

  return (
    <>
      <Head>
        <title>Country - {countryParam}</title>
        <meta
          name="description"
          content="Information about a specific country"
        />
      </Head>
      <button
        className="w-32 h-10 dark:shadow-dark-mode-bg flex justify-center items-center 
        rounded
        hover:scale-105
        hover:ease-in duration-100
        active:scale-100
        mb-12 mt-2 left-4 md:left-10 relative text-base
        shadow-[0_0px_4px_-2px_hsl(0,5%,8%)]
        dark:shadow-2xl
        text-light-mode-text dark:bg-dark-mode-elements dark:text-dark-mode-text-light-elements"
        onClick={goBackHandler}
      >
        {isLoading ? <Loader class={true} /> : <BackArrow />} Back
      </button>
      <ExtendedCard country={countryParam} />
    </>
  );
};

export default CountryPage;
