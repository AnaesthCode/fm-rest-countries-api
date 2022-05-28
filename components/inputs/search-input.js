import SearchIcon from "../icons/search-icon-";
import { useRef } from "react";

const SearchInput = (props) => {
  const searchInputRef = useRef();

  const focusSearchInput = () => {
    searchInputRef.current.focus();
  };

  const countrySearchHandler = (e) => {
    props.onCountryBySearch(e.target.value);
  };

  return (
    <div className="w-full md:w-2/6 items-center rounded pl-4 h-12 mb-4 md:mb-0  flex flex-row shadow bg-dark-mode-text-light-elements text-light-mode-text dark:bg-dark-mode-elements dark:text-dark-mode-text-light-elements">
      <SearchIcon onClick={focusSearchInput} />
      <input
        onChange={countrySearchHandler}
        ref={searchInputRef}
        className="w-full h-full ml-6
        focus:outline-none
        bg-dark-mode-text-light-elements text-light-mode-text dark:bg-dark-mode-elements dark:text-dark-mode-text-light-elements"
        type="text"
        placeholder="Search for a country"
      />
    </div>
  );
};

export default SearchInput;
