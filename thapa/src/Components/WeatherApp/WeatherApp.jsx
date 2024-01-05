import React, { useEffect, useState } from "react";
import "./Css/Style.css";
import axios from "axios";

const WeatherApp = () => {
  const [city, setCity] = useState();
  const [search, setSearch] = useState("mumbai");

  useEffect(() => {
    //  const fetchApi = async ()=>{
    //     const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=49d694a46b04beaf0eb2ce3f3f833417`
    //     const response = await fetch(url)

    //     // console.log(response);
    //     const resJson = await response.json();
    //     console.log(resJson);

    //  }

    //  fetchApi();

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=49d694a46b04beaf0eb2ce3f3f833417`
      )
      .then((res) => {
        console.log(res.data);
        setCity(res.data)
      });

    // async function getData (){
    //     const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=49d694a46b04beaf0eb2ce3f3f833417`)
    //     console.log(res);
    // }

    // getData();

    // const getData = async ()=>{
    //     const res = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=49d694a46b04beaf0eb2ce3f3f833417`)
    //     console.log(res);

    // }
    // getData();
  }, [setSearch]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            style={{ width: "300px" }}
            type="search"
            placeholder="Enter City"
            className="inputField"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </div>

      <div className="info">
        <h2 className="location"> </h2>
      </div>

      <button> Submit </button>
    </>
  );
};

export default WeatherApp;

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={49d694a46b04beaf0eb2ce3f3f833417}

// f4f35a30a8mshc251b32922a74bep18d893jsn60a258327c97
