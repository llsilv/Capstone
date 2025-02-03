// src/components/BookingForm.js
import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

function Booking() {
  const formik = useFormik({
    initialValues: {
      name: "",
      dateTime: "",
      guests: 1,
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      alert("Your booking is confirmed");
      resetForm();
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      dateTime: Yup.date().required("Date and time are required"),
      guests: Yup.number()
        .min(1, "At least 1 guest")
        .max(12, "Maximum of 12 guests")
        .required("Number of guests is required"),
      message: Yup.string().max(144, "Comment must be at least 5 characters"),
    }),
  });

  return (
    <form onSubmit={formik.handleSubmit} className="booking">
      <label>
        Name
        <span className="required">*</span>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          required
        />
      </label>
      {formik.errors.name && <div>{formik.errors.name}</div>}

      <label>
        Date/Time
        <span className="required">*</span>
        <input
          type="datetime-local"
          name="dateTime"
          value={formik.values.dateTime}
          onChange={formik.handleChange}
          required
        />
      </label>
      {formik.errors.dateTime && <div>{formik.errors.dateTime}</div>}

      <label>
        No. of People
        <span className="required">*</span>
        <input
          type="number"
          name="guests"
          value={formik.values.guests}
          min="1"
          max="12"
          onChange={formik.handleChange}
          required
        />
      </label>
      {formik.errors.guests && <div>{formik.errors.guests}</div>}

      <label>
        Message
        <textarea
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
        />
      </label>
      {formik.errors.message && <div>{formik.errors.message}</div>}

      <button type="submit" className="submitTable">
        <p>Submit Reservation</p>
      </button>
    </form>
  );
}

export default Booking;
