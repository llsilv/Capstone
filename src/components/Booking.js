import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

function Booking({ availableTimes, updateAvailableTimes, submitForm }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      date: "",
      time: "",
      guests: 1,
      occasion: "",
      message: "",
    },
    onSubmit: async (values, { resetForm }) => {
      await submitForm(values);
      resetForm();
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      date: Yup.date().required("Date is required"),
      time: Yup.string().required("Time is required"),
      guests: Yup.number()
        .min(1, "At least 1 guest")
        .max(12, "Maximum of 12 guests")
        .required("Number of guests is required"),
      occasion: Yup.string(),
      message: Yup.string().max(144, "Message must be at least 5 characters"),
    }),
  });

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    updateAvailableTimes(selectedDate);
  };

  return (
    <form onSubmit={formik.handleSubmit} className="booking">
      <label For="name">
        Name
        <span className="required">*</span>
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formik.values.name}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        required
      />
      {formik.touched.name && formik.errors.name && (
        <div>{formik.errors.name}</div>
      )}

      <label For="date">
        Date
        <span className="required">*</span>
      </label>
      <input
        type="date"
        id="date"
        name="date"
        value={formik.values.date}
        onBlur={(e) => {
          formik.handleBlur(e);
          handleDateChange(e);
        }}
        onChange={formik.handleChange}
        required
      />
      {formik.touched.date && formik.errors.date && (
        <div>{formik.errors.date}</div>
      )}

      <label For="time">
        Time
        <span className="required">*</span>
      </label>
      <select
        id="time"
        name="time"
        value={formik.values.time}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        required
        disabled={!formik.values.date}
      >
        <option value="">
          {!formik.values.date ? "Select a date first" : "Select a time"}
        </option>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>
      {formik.touched.time && formik.errors.time && (
        <div>{formik.errors.time}</div>
      )}

      <label For="guests">
        No. of People
        <span className="required">*</span>
      </label>
      <input
        type="number"
        id="guests"
        name="guests"
        value={formik.values.guests}
        min="1"
        max="12"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        required
      />
      {formik.touched.guests && formik.errors.guests && (
        <div>{formik.errors.guests}</div>
      )}

      <label For="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formik.values.occasion}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      >
        <option>Select an occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      {formik.touched.occasion && formik.errors.occasion && (
        <div>{formik.errors.occasion}</div>
      )}

      <label For="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={formik.values.message}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      {formik.touched.message && formik.errors.message && (
        <div>{formik.errors.message}</div>
      )}

      <button type="submit" className="submitTable">
        Submit Reservation
      </button>
    </form>
  );
}

export default Booking;
