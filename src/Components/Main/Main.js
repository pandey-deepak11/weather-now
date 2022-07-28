import React, { useState } from "react";
import "./Main.css";
import WeatherInfo from "./WeatherInfo";
import RecentCities from "./RecentCities";
import instagram from "./../../Images/instagram.png";
import linkedin from "./../../Images/linkedin.png";

import useClickHandler from "./../hooks/useClickHandler";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useSelector } from "react-redux";
// ..
AOS.init();

const Main = () => {
  // let loading = false;
  const [enteredValue, setEnteredValue] = useState("");
  const [loading, setLoading] = useState(false);

  const { ClickHandler, click } = useClickHandler();

  const changeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const deviceClickHandler = () => {
    setTimeout(() => {
      ClickHandler(true, enteredValue, false);
      setLoading(false);
    }, 2000);
    setLoading(true);
  };

  const searchClickHandler = () => {
    setTimeout(() => {
      ClickHandler(false, enteredValue, true);
      setLoading(false);
    }, 2000);
    setLoading(true);
    setEnteredValue("");
  };

  return (
    <>
      <div className="container">
        {loading ? (
          <div
            style={{ color: "white", position: "absolute", top: "350px" }}
            className="lds-circle"
          >
            <div></div>
          </div>
        ) : (
          ""
        )}
        <header>
          <h1
            data-aos="slide-right"
            data-aos-delay="100"
            data-aos-duration="2000"
          >
            "The best weather prediction for the present moment is to look out
            of the window!""
          </h1>
        </header>
        <article>
          <div
            className="search"
            id="search"
            data-aos="slide-left"
            data-aos-delay="100"
            data-aos-duration="2000"
          >
            <input
              type="text"
              name="location"
              className="icon"
              placeholder="Enter City Name"
              onChange={changeHandler}
              value={enteredValue}
            />
            <button onClick={searchClickHandler}>Search</button>
            <button onClick={deviceClickHandler}>Device Location</button>
          </div>

          <div
            className="recentCity"
            data-aos="fade-in"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <RecentCities />
          </div>
        </article>
      </div>
      <section>{click ? <WeatherInfo /> : ""}</section>
      <footer className="footer">
        <p>© 2022 DeepakPandey</p>
        <div className="logos">
          <a
            href="https://www.instagram.com/pandey_deepak11/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/pandey-deepak11/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default React.memo(Main);
