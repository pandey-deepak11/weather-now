import React, { useEffect, useState } from "react";
import "./Background.css";

import Navbar from "./Navbar";
import Main from "../Main/Main";
import t3 from "./../../Images/thunderstorm.jpg";
import t2 from "./../../Images/cloudd.jpeg";
import t4 from "./../../Images/aa.avif";
import t5 from "./../../Images/sunnyyy.jpg";
import t1 from "./../../Images/clear.jpg";

const Background = () => {
  // let loading = false;
  // let b;
  const [bg, setBg] = useState("t1");
  const [back, setBack] = useState(null);
  const [loading, setLoading] = useState(false);
  const backgroundHandler = (value) => {
    setBg(value);
    setLoading(true);
  };

  var b = "";
  useEffect(() => {
    if (bg === "t1") {
      b = t1;
      // console.log(loading);
    }
    if (bg === "t2") {
      b = t2;
      // console.log(loading);
    }
    if (bg === "t3") {
      b = t3;
    }
    if (bg === "t4") {
      b = t4;
    }
    if (bg === "t5") {
      b = t5;
    }
    if (bg === "t6") {
      b = "https://source.unsplash.com/random/500×300/?weather";
    }

    setTimeout(() => {
      setLoading(false);
    }, 300);

    setBack(b);
  }, [bg]);

  // }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${back})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          backgroundPosition: "center",
        }}
        className="Background"
      >
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
        {/* {state.isLoading ? <p>"True"</p> : <p>"false"</p>} */}
        <Navbar onBackground={backgroundHandler} />
        <Main />
      </div>
    </>
  );
};
export default Background;
