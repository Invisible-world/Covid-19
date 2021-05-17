import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { fetchCountries } from "../../api";
import styles from "./countryPicker.module.css";

const { Option } = Select;

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchedCountries = async () => {
      setCountries(await fetchCountries());
    };
    fetchedCountries();
  }, [setCountries]);
  const handleCountrySearch = value => {
    console.log(value);
  };
  return (
    <div className={styles.container}>
      <Select
        showSearch
        defaultValue="Global"
        style={{ width: 300 }}
        onSelect={value => handleCountryChange(value)}
        onSearch={handleCountrySearch}
      >
        <Option value="">GLobal</Option>
        {countries.map((country, i) => (
          <Option value={country} key={i}>
            {country}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default CountryPicker;
