import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs"
import { WiHumidity } from "react-icons/wi";
import { PiWind } from "react-icons/pi";
const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);


  const api_key = 'd37694a2c631262056af6d36874c8fe8';
  
  const Input = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
  }
  
  const search = async() => {
      
    
    
      const  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`;


      try {
        const response = await axios.get(url);
        console.log(response.data);
        setWeather(response.data);
      } catch (error) {
        console.log(error);
      } 

  }
  
// background-color: ;
  return (
    <div className="pt-5 h-full w-[400px] m-auto rounded-md py-5">
        <h1 className='text-4xl text-semibold py-5'>Weather App</h1>
      <div className="flex items-center justify-center gap-2 w-[300px] m-auto bg-white rounded-full ">
        <div>
        <input type="text" placeholder="Search.." className="p-4 border-none text-black focus:border-none" id="city_input" onInput={(e) => Input(e)}/>
        </div>
      <div>
        <button onClick={search}>
        <BsSearch className="text-black cursor-pointer"/>
        </button>
      
      </div>
      
      </div>
       
       <img src="https://www.pngmart.com/files/3/Weather-PNG-Photos.png" alt="cloud" className="m-auto" width="200px" />

       <div>
        <h1 className="text-6xl text-bold">{weather.main && weather.main.temp} ° C</h1>
        <h2 className="text-4xl text-semibold">{weather.name}</h2>
       </div>
       <div className="flex items-center justify-around pt-20">
        <div className="flex items-center justify-around">
          <div>
          <WiHumidity className="text-6xl"/>
          </div>
         <div>
         <h1 className="text-2xl">{weather.main && weather.main.humidity} %</h1>
         <h1 className="text-md">Humidity</h1>
         </div>
         
        </div>

        <div className="flex items-center justify-around">
          <div>
          <PiWind className="text-6xl"/>
          </div>
         <div>
         <h1 className="text-2xl">{weather.wind && weather.wind.speed} km / h</h1>
         <h1 className="text-md">Wind Speed</h1>
         </div>
         
        </div>
       </div>
    </div>
  );
};

export default Weather;
