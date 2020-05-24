import React from "react";

const CountryList = ({ countries, showCountry }) => {
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
        <img
          src={country.flag}
          style={{ width: "100px" }}
          alt={`Map of ${country.name}`}
        />
      </div>
    );
  } else if (countries.length > 10) {
    return <p>More than 10 results, try refining the filter.</p>;
  } else {
    return (
      <div>
        {countries.map((country) => {
          return (
            <div key={`${country.alpha3Code}`}>
              <p>
                {country.name}{" "}
                <button
                  onClick={() => {
                    showCountry(country.name.toLowerCase());
                  }}
                >
                  Show country
                </button>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
};

export default CountryList;
