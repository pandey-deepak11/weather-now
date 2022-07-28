import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cityData: "",
  recentSearchedCity: localStorage.getItem("searchedCity")
    ? localStorage.getItem("searchedCity").split(",")
    : [],
  click: false,
  deviceLocation: {},
  city: {},
  error: false,
  invalid: false,
};

const weatherSlice = createSlice({
  name: "WEATHER",
  initialState,
  reducers: {
    currentCity(state, action) {
      state.cityData =
        action.payload.charAt(0).toUpperCase() +
        action.payload.slice(1).toLowerCase();

      if (
        !state.click &&
        !state.recentSearchedCity.includes(state.cityData) &&
        !state.invalid
      ) {
        if (action.payload.length > 0 && state.recentSearchedCity.length > 5) {
          state.recentSearchedCity.shift();
          state.recentSearchedCity.push(
            action.payload.charAt(0).toUpperCase() +
              action.payload.slice(1).toLowerCase()
          );
        } else {
          if (action.payload.length > 0) {
            state.recentSearchedCity.push(
              action.payload.charAt(0).toUpperCase() +
                action.payload.slice(1).toLowerCase()
            );
          }
        }
        localStorage.setItem("searchedCity", state.recentSearchedCity);
      }
    },

    clickEvent(state, action) {
      state.click = action.payload;
    },
    deviceData(state, action) {
      if (action.payload.lat) {
        state.deviceLocation = {
          ...action.payload,
        };
      }
    },
    currentCityData(state, action) {
      state.city = { ...action.payload };
    },
    errorData(state, action) {
      state.error = action.payload;
    },
    invalidValue(state, action) {
      state.invalid = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: weatherSlice.reducer,
});

export const weatherActions = weatherSlice.actions;
