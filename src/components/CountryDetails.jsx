import React from 'react';

const CountryDetails = ({country}) => {
    const {capital,  currencies, flags, name  }=country
    console.log(currencies?.currencies);
    
    return (
        <div className='countryDiv'>
            <img src={flags.flags.png} alt={flags.flags.alt} />
            <h3>Name : {name.common}</h3>
            <h4>Official Name : {name.official}</h4>
            <h4>Capital name : {capital.capital}</h4>
            <h4>{currencies?.currencies}</h4>
        </div>
    );
};

export default CountryDetails;