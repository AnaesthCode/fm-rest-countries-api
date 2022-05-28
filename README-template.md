# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

## My process

### Built with

- Semantic HTML5 markup
- Tailwind
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- Next-themes to toggle darkmode

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Where to start. Never tried a project like this before. 2nd project using tailwind so still learning a lot. Just trying to solidify React/Next.js. Building the dropdown-select was a pain...

To see how you can add code snippets, see below:

```js
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
};
```

### Continued development

Multipage layout, backend, tailwind

### Useful resources

- [Example resource 1](https://heroicons.com/) - Got all the icons from heroicons

## Author

- Frontend Mentor - [@AnaesthCode](https://www.frontendmentor.io/profile/AnaesthCode)
