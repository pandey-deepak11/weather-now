import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const useFetchdata = () => {
  const cityValue = useSelector((state) => state.cityData);
  const city = cityValue ? cityValue : "Delhi";
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const clickEvent = useSelector((state) => state.click);
  const device = useSelector((state) => state.deviceLocation);
  const url = clickEvent
    ? `https://api.openweathermap.org/data/2.5/weather?lat=${device.lat}&&lon=${device.lon}&APPID=1d0712e9838cbd754b511939fea14522`
    : `https://api.openweathermap.org/data/2.5/weather?q=${city},India&APPID=3302bedc45b7ad7a879ce6b9448d82ec`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setError(false);
      })
      .catch((err) => setError(true));
    // }
  }, [url]);

  return {
    data,
    clickEvent,
    error,
  };
};

export default useFetchdata;
