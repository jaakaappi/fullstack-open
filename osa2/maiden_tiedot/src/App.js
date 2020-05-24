import axios from "axios";
import React, { useState, useEffect } from "react";
import CountryList from "./components/CountryList";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    axios
      .request("https://restcountries.eu/rest/v2/all")
      .then((request) => {
        console.log(request.data);
        setCountries(request.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const showCountry = (countryName) => {
    setNameFilter(countryName);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(nameFilter)
  );

  return (
    <div>
      {"Find countries: "}
      <input
        value={nameFilter}
        onChange={(e) => {
          setNameFilter(e.currentTarget.value);
        }}
      />
      <CountryList countries={filteredCountries} showCountry={showCountry} />
    </div>
  );
};

export default App;
