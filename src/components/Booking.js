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
      message: Yup.string().max(144, "Message must be at least 5 characters"),
    }),
  });

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    updateAvailableTimes(selectedDate);
  };

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
        Date
        <span className="required">*</span>
        <input
          type="date"
          name="date"
          value={formik.values.date}
          onChange={(e) => {
            formik.handleChange(e);
            handleDateChange(e);
          }}
          required
        />
      </label>
      {formik.errors.date && <div>{formik.errors.date}</div>}

      <label>
        Time
        <span className="required">*</span>
        <select
          name="time"
          value={formik.values.time}
          onChange={formik.handleChange}
          required
          disabled={!formik.values.date}
        >
          <option value="">Select a time</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
      </label>
      {formik.errors.time && <div>{formik.errors.time}</div>}

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
        Submit Reservation
      </button>
    </form>
  );
}

export default Booking;
