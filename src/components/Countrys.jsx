import React, { use } from 'react';
import CountryDetails from './CountryDetails';

const Countrys = ({datapromise}) => {
    const AllCountrys= use(datapromise);
    const Country=(AllCountrys.countries);
    
    
    return (
        <div>
            <h1>All The Countrys</h1>
            {
                Country.map(country=><CountryDetails  key={country.cca3.cca3} country={country}></CountryDetails>)
            }
        </div>
    );
};

export default Countrys;

