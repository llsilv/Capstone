import React, { useReducer, useEffect } from "react";
import Booking from "../components/Booking";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const timesReducer = (state, action) => {
  switch (action.type) {
    case "setAvailableTimes":
      return {
        ...state,
        availableTimes: action.availableTimes,
      };
    default:
      return state;
  }
};

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};

function BookingPage() {
  const initialState = {
    availableTimes: [],
    selectedDate: "",
  };

  const [state, dispatch] = useReducer(timesReducer, initialState);
  const navigate = useNavigate();

  const initializeTimes = () => {
    const today = new Date();
    const availableTimes = fetchAPI(today);
    dispatch({ type: "setAvailableTimes", availableTimes });
  };

  const updateAvailableTimes = (selectedDate) => {
    const availableTimes = fetchAPI(new Date(selectedDate));
    dispatch({ type: "setAvailableTimes", availableTimes });
  };

  const submitForm = async (formData) => {
    const success = true;
    if (success) {
      navigate("/confirmed");
    } else {
      alert("There was an error submitting your booking");
    }
  };

  useEffect(() => {
    initializeTimes();
  }, []);

  useEffect(() => {
    if (state.selectedDate) {
      updateAvailableTimes(state.selectedDate);
    }
  }, [state.selectedDate]);

  return (
    <main className="bookingPage">
      <h1>Reserve a Table</h1>
      <Booking
        availableTimes={state.availableTimes}
        updateAvailableTimes={updateAvailableTimes}
        submitForm={submitForm}
      />
    </main>
  );
}

export default BookingPage;
