import React from "react";
import "./../UI/Navbar.css";
import weather from "./../../Images/weather.jpg";
import AOS from "aos";
// import t from "./../../Images/thunderstorm.jpg";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Navbar = (props) => {
  const selectHandler = (e) => {
    props.onBackground(e.target.value);
  };

  return (
    <div className="top">
      <nav className="color navigation">
        <div className="container-nav heading">
          <img src={weather} alt="logo" className="logo" />
          <span className="navbar-brand mb-0 h1 ">
            <h1>Weather Now </h1>
          </span>
        </div>
        <div className="dropdown">
          <h5>Change Wallpaper</h5>

          <select className="select" onChange={selectHandler}>
            <option value="t1">Clear Night</option>
            <option value="t2">Cloudy</option>
            <option value="t3">Thundering</option>
            <option value="t4">Raining</option>
            <option value="t5">Sunny</option>
            <option value="t6">Random</option>
          </select>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
