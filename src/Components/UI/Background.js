import React, { useReducer, useState } from "react";

import Navbar from "./Navbar";
import Main from "../Main/Main";
import t3 from "./../../Images/thunderstorm.jpg";
import t2 from "./../../Images/cloudd.jpeg";
import t4 from "./../../Images/aa.avif";
import t5 from "./../../Images/sunnyyy.jpg";
import t1 from "./../../Images/clear.jpg";

const Background = () => {
  const initialState = {
    isLoading: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "Started":
        return (state.isLoading = false);

      case "Completed":
        return (state.isLoading = true);
    }
  };

  // let loading = false;
  let b;
  const [bg, setBg] = useState("t1");
  const [state, dispatch] = useReducer(reducer, initialState);
  const backgroundHandler = (value) => {
    setBg(value);
  };

  if (bg === "t1") {
    b = t1;
  }
  if (bg === "t2") {
    b = t2;
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
    dispatch({ type: "Started" });
    b = "https://source.unsplash.com/random/900×700/?weather";
    dispatch({ type: "Started" });
  }

  console.log(state.isLoading);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${b})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          backgroundPosition: "center",
        }}
      >
        {/* {state.isLoading ? <p>"True"</p> : <p>"false"</p>} */}
        <Navbar onBackground={backgroundHandler} />
        <Main />
      </div>
    </>
  );
};
export default Background;
