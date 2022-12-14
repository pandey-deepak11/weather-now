import React, { useEffect, useState } from "react";
import "./../Main/WeatherInfo.css";
import { useSelector } from "react-redux";
import SimpleDateTime from "react-simple-timestamp-to-date";
import placeholder from "./../../Images/placeholder.png";
import compass from "./../../Images/compass.png";
import sunrise from "./../../Images/sunrise.png";
import sunset from "./../../Images/sunset.png";
import temperature from "./../../Images/temperature.png";
import humidity from "./../../Images/humidity.png";
import clearSky from "./../../Images/clear-sky.png";
import clouds from "./../../Images/clouds.png";
import shower from "./../../Images/raining.png";
import raining from "./../../Images/shower.png";
import thunderstorm from "./../../Images/thunderstorm.png";
import mist from "./../../Images/mist.png";
import snow from "./../../Images/snow.png";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const WeatherInfo = () => {
  let b;
  const error = useSelector((state) => state.error);

  // const clickEvent = useSelector((state) => state.click);
  const data = useSelector((state) => state.city);

  if (data.weather[0].main === "Clear") {
    b = clearSky;
  }
  if (data.weather[0].main === "Clouds") {
    b = clouds;
  }
  if (data.weather[0].main === "Drizzle") {
    b = shower;
  }
  if (data.weather[0].main === "Rain") {
    b = raining;
  }
  if (data.weather[0].main === "Thunderstorm") {
    b = thunderstorm;
  }
  if (
    data.weather[0].main ===
    ("Mist" ||
      "Smoke" ||
      "haze" ||
      "Dust" ||
      "Fog" ||
      "Sand" ||
      "Ash" ||
      "Squall" ||
      "Tornado")
  ) {
    b = mist;
  }
  if (data.weather[0].main === "Snow") {
    b = snow;
  }

  return (
    <>
      {!error ? (
        <div
          className="weatherConditions"
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <div className="cityDetails">
            <div className="location">
              <img src={placeholder} alt="location" />
              <p>{data.name}</p>
            </div>
            <div className="long-lat">
              <img src={compass} alt="compass" />
              <div className="lon-lat">
                <p>Longitude :{data.coord.lon.toFixed(2)}</p>
                <p className="lat">Latitude: {data.coord.lat.toFixed(2)}</p>
              </div>
            </div>
            <div className="sunrise">
              <img src={sunrise} alt="sunrise" />
              <p>
                <SimpleDateTime
                  timeSeparator=":"
                  format="MYD"
                  showTime="1"
                  showDate="0"
                  meridians="1"
                >
                  {data.sys.sunrise}
                </SimpleDateTime>
              </p>
            </div>
            <div className="sunset">
              <img src={sunset} alt="sunset" />
              <p>
                <SimpleDateTime
                  timeSeparator=":"
                  format="MYD"
                  showTime="1"
                  showDate="0"
                  meridians="1"
                >
                  {data.sys.sunset}
                </SimpleDateTime>
              </p>
            </div>
          </div>
          <div className="weather-icons">
            <div className="weather-desc">
              <img src={b} alt="weather-description" />
              <p>{data.weather[0].description}</p>
            </div>
            <div className="temp-img">
              <img src={temperature} alt="temp" />
              <div className="temp">
                <p>
                  Max-temperature: {(data.main.temp_max - 273).toFixed(1)}??C
                </p>
                <p>
                  Min-Temperature: {(data.main.temp_min - 273).toFixed(1)}??C
                </p>
              </div>
            </div>
            <div className="humidity">
              <img src={humidity} alt="humidity" />
              <p>Humidity: {data.main.humidity}%</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="cityDetails error-details">
          <h4
            style={{
              color: "red",
              position: "absolute",
            }}
          >
            Not Found : Please Enter Correct City Name
          </h4>
        </div>
      )}
      )
    </>
  );
};

export default WeatherInfo;
