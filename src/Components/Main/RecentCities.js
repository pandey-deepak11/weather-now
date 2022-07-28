import React from "react";
import { useSelector } from "react-redux";
import "./RecentCities.css";
import recent from "./../../Images/recent.png";
import pin from "./../../Images/pin.png";

const RecentCities = () => {
  const data = useSelector((state) => state.recentSearchedCity);

  return (
    <div className="recent">
      {/* { data.length >0 ? */}
      <div className="recent-searched">
        <h2>
          {" "}
          <img src={recent} alt="recent" /> Recently Searched Cities
        </h2>
      </div>
      {data.length > 0 ? (
        <div className="all-city">
          {data.map((city, i) => (
            <div className="recent-city" key={i}>
              <img src={pin} alt="pin" />
              <h4 className="cityName">{city}</h4>
            </div>
          ))}
        </div>
      ) : (
        <h3 className="error">
          You haven't searched for any city yet. Go ahead and Search it !!
        </h3>
      )}
    </div>
  );
};

export default RecentCities;
