import React, { useState } from "react";

import { weatherActions } from "../Store/index";
import { useDispatch } from "react-redux";
import useFetchdata from "./hooks/useFetchdata";

const FetchData = () => {
  const dispatch = useDispatch();

  const { clickEvent, data } = useFetchdata();

  if (clickEvent) {
    dispatch(weatherActions.currentCity(data.name));
  }

  dispatch(weatherActions.currentCityData(data));

  return <div></div>;
};

export default FetchData;