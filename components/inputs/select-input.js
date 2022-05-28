import ArrowDown from "../icons/arrow-down";
import { useEffect, useState } from "react";

const SelectInput = (props) => {
  const [showDropdown, setShowdropdown] = useState(false);
  const [regionSelected, setSelectedRegion] = useState();

  const toggleDropdown = () => {
    setShowdropdown((prevValue) => !prevValue);
  };

  const selectRegionHandler = (e) => {
    setSelectedRegion(e.target.value);
    console.log(e.target.value);
    const region = e.target.value;
    props.onCountryByRegion(region);
    setShowdropdown(false);
  };

  const darkModeSettings =
    "bg-dark-mode-text-light-elements text-light-mode-text dark:bg-dark-mode-elements dark:text-dark-mode-text-light-elements";
  return (
    <>
      <div
        onClick={toggleDropdown}
        className={`h-12 w-3/6 md:w-2/6 lg:w-1/6 px-4 mb-2 flex content-center justify-between items-center rounded-sm
        hover:cursor-pointer shadow 
       ${darkModeSettings}`}
      >
        {regionSelected ? regionSelected : " Filter By Region"}
        <div className="inline-block">
          <ArrowDown />
        </div>
      </div>
      <ul
        className={`py-2 w-3/6 md:w-1/4 lg:w-1/6 z-10 absolute rounded-sm shadow 
        top-28
        md:right-20 md:top-14
        lg:right-10 lg:top-14
       
        ${darkModeSettings} ${!showDropdown && "hidden"}`}
      >
        <li className="py-1 px-4 hover:bg-light-mode-bg dark:hover:bg-dark-mode-bg ">
          <input
            onClick={selectRegionHandler}
            value="Asia"
            name="region"
            id="asia"
            className="hidden"
            type="radio"
          />{" "}
          <label
            className="inline-block bg-black-900 w-11/12  hover:cursor-pointer "
            htmlFor="asia"
            onClick={selectRegionHandler}
          >
            Asia
          </label>
        </li>
        <li className="py-1 px-4 w-full  hover:bg-light-mode-bg dark:hover:bg-dark-mode-bg">
          <input
            onClick={selectRegionHandler}
            className="hidden"
            value="Africa"
            name="region"
            id="africa"
            type="radio"
          />
          <label
            className="inline-block w-11/12  hover:cursor-pointer "
            htmlFor="africa"
          >
            Africa
          </label>
        </li>
        <li className="py-1 px-4  hover:bg-light-mode-bg dark:hover:bg-dark-mode-bg">
          <input
            onClick={selectRegionHandler}
            className="hidden"
            value="Americas"
            name="region"
            type="radio"
            id="america"
          />
          <label
            className="inline-block w-11/12  hover:cursor-pointer "
            htmlFor="america"
          >
            America
          </label>
        </li>
        <li className="py-1 px-4  hover:bg-light-mode-bg dark:hover:bg-dark-mode-bg">
          <input
            onClick={selectRegionHandler}
            className="hidden"
            value="Europe"
            name="region"
            type="radio"
            id="europe"
          />
          <label
            className="inline-block w-11/12  hover:cursor-pointer "
            htmlFor="europe"
          >
            Europe
          </label>
        </li>
        <li className="py-1 px-4  hover:bg-light-mode-bg dark:hover:bg-dark-mode-bg">
          <input
            onClick={selectRegionHandler}
            className="hidden"
            value="Oceania"
            name="region"
            type="radio"
            id="oceania"
          />
          <label
            className="inline-block w-11/12  hover:cursor-pointer "
            htmlFor="oceania"
          >
            Oceania
          </label>
        </li>
        <li className="py-1 px-4  hover:bg-light-mode-bg dark:hover:bg-dark-mode-bg">
          <input
            onClick={selectRegionHandler}
            className="hidden"
            value={undefined}
            name="region"
            type="radio"
            id="none"
          />
          <label
            className="inline-block w-11/12  hover:cursor-pointer "
            htmlFor="none"
          >
            All Countries
          </label>
        </li>
      </ul>
    </>
  );
};

export default SelectInput;
