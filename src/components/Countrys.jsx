import React, { use } from "react";
import CountryDetails from "./CountryDetails";
import './Countrys.css'
import { useState } from "react";

const Countrys = ({ datapromise }) => {
  const AllCountrys = use(datapromise);
  const Country = AllCountrys.countries;
  const [countryVisited, setcountryVisited] = useState([]);

  const totalVisited = (country) => {
    const exists = countryVisited.find(
    (c) => c.cca3 === country.cca3
    
    
  );
console.log(country.cca3);
  if (exists) {
    setcountryVisited(
      countryVisited.filter(c => c.cca3.cca3 !== country.cca3.cca3)
    );
  } else {
    setcountryVisited([...countryVisited, country]);
  }};
    
  return (
    <div>
      <h1 style={{ fontFamily: "Lobster", letterSpacing: "5px" }}>
        All The Countrys
      </h1>
      <h3> Total Visited Country{countryVisited.length}</h3>
      <div className="divContainer">
        {Country.map((country) => (
          <CountryDetails
            key={country.cca3.cca3}
            country={country}
            totalVisited={totalVisited}
          ></CountryDetails>
        ))}
      </div>
    </div>
  );
};

export default Countrys;
