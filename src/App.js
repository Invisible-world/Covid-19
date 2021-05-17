import "./App.css";
import React, { useEffect, useState } from "react";
import { fetchData } from "./api";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import coronaImage from "./image/image.png";

import { Image } from "antd";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const dataFunc = async () => {
      const recievedData = await fetchData();
      setData(recievedData);
    };
    dataFunc();
  }, []);
  const handleCountryChange = async country => {
    console.log(country);
    //fetch API
    const fetchCountryData = await fetchData(country);
    setData(fetchCountryData);
    setCountry(country);
  };

  return (
    <>
      <Image src={coronaImage} alt="covid-19" preview='false' />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart country={country} datas={data} />
    </>
  );
}

export default App;
