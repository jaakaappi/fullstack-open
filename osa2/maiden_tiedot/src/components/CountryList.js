import React, { useEffect, useState } from "react";

const CountryList = ({ countries, showCountry }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (countries.length === 1) {
      const request = new Request(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${countries[0].name}`,
        { method: "GET" }
      );

      fetch(request)
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          console.log(json);
          setWeather(json.current);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [countries]);

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
        <h2>Weather</h2>
        {weather !== null && (
          <>
            <p>Temperature: {`${weather.temperature} degrees Celcius`}</p>
            <img src={weather.weather_icons[0]} />
            <p>
              Wind:{" "}
              {`${weather.wind_speed} mph, direction: ${weather.wind_dir}`}
            </p>
          </>
        )}
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
