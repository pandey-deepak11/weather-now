import React, { useState } from "react";

import { weatherActions } from "./../Store/index";
import { useDispatch } from "react-redux";
import useFetchdata from "./hooks/useFetchdata";

const FetchData = () => {
  const dispatch = useDispatch();

  const { clickEvent, data, error } = useFetchdata();

  dispatch(weatherActions.errorData(error));
  // dispatch(weatherActions.errorData(`${error}`));

  if (!error) {
    if (clickEvent) {
      dispatch(weatherActions.currentCity(data.name));
    }
    dispatch(weatherActions.currentCityData(data));
  }

  return <div></div>;
};

export default FetchData;
