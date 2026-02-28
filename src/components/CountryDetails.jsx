import React, { useState } from "react";
import './CssComponent/CountryDetails.css'
import './CssComponent/CountryDetails.css'


const CountryDetails = ({ country, totalVisited }) => {
  const { capital, currencies, flags, name } = country;
  const currenciesData = Object.values(currencies?.currencies || {})[0];
  const currenciesName = currenciesData?.name;
  const currenciesSymball = currenciesData?.symbol;

  const [active, setactive] = useState(false);
  const VisitedClick = () => {
  setactive (!active)
  totalVisited(country)
    };

  return (
    <div>
      <div className={`countryDiv ${active && "country-visited" }`}>
        <div >
          <img src={flags.flags.png} alt={flags.flags.alt} />
          <h3>Name : {name.common}</h3>
          <h4>Official Name : {name.official}</h4>
          <h4>Capital name : {capital.capital}</h4>
          <h4>
            {currenciesSymball} && {currenciesName}
          </h4>
          <button className="my-button" onClick={VisitedClick} type="button">
            { active ? "visited": "Not Visited"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;

// !USING Object.value method
//   const currencyData = Object.values(currencies?.currencies || {})[0];

//   const currencyName = currencyData?.name;
//   const currencySymbol = currencyData?.symbol;

//   !Using Loop method
//   const currencyObj = currencies?.currencies;

//   let currencyName = "";
//   let currencySymbol = "";

//   for (const key in currencyObj) {
//     currencyName = currencyObj[key].name;
//     currencySymbol = currencyObj[key].symbol;
//   }
