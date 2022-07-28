import { useState } from "react";
import { useDispatch } from "react-redux";
import { weatherActions } from "../../Store";

const useClickHandler = () => {
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();

  const ClickHandler = (isClicked, value, fetchCity) => {
    // if (isClicked) {
    dispatch(weatherActions.clickEvent(isClicked));
    // }

    if (!click) {
      setClick(true);
    }
    if (fetchCity) {
      dispatch(weatherActions.currentCity(value));
    }

    setTimeout(() => {
      window.scrollTo({
        top: 950,
        left: 100,
        behavior: "smooth",
      });
    }, 300);
  };

  return {
    ClickHandler,
    click,
  };
};

export default useClickHandler;
