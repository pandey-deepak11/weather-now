import React, { useEffect, useState } from "react";
import { weatherActions } from "../../Store";
import { useDispatch } from "react-redux";

const DeviceLocation = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const successCallback = (p) => {
      setData({ lat: p.coords.latitude, lon: p.coords.longitude });
    };

    const errorCallback = () => {
      console.log("failed");
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
      timeout: 100,
    });
  }, []);
  if (data.lat) {
    dispatch(weatherActions.deviceData(data));
  }

  return <div></div>;
};

export default DeviceLocation;
