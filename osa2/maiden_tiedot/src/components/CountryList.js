import React from "react";

const CountryList = ({ countries }) => {
  if (countries.length === 1) {
    const country = countries[0];
    return (
      <div key={`${country.alpha3Code}-single`}>
        <h1>{country.name}</h1>
        <p>{country.capital}</p>
        <p>{country.population}</p>
        <h2>Languages</h2>
        {country.languages.map((language) => {
          return (
            <p key={`${country.alpha3Code}-${language.name}`}>
              {language.name}
            </p>
          );
        })}
        <img src={country.flag} style={{ width: "100px" }} />
      </div>
    );
  } else if (countries.length > 10) {
    return <p>More than 10 results, try refining the filter.</p>;
  } else {
    return (
      <div>
        {countries.map((country) => {
          return <p key={`${country.alpha3Code}`}>{country.name}</p>;
        })}
      </div>
    );
  }
};

export default CountryList;
