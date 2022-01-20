import React from "react";
import { PropTypes } from "prop-types";
import "./App.css";
export const QuoteForm = (props) => {
  const { quoteForm, handleAddressUpdate, handleFormSubmit, handleNameUpdate } =
    props;

  return (
    <form className="content" onSubmit={(e) => e.preventDefault()}>
      <label>
        First Name
        <input
          type="text"
          name="first_name"
          value={quoteForm.first_name}
          onChange={handleNameUpdate}
        />
      </label>
      <label>
        Last Name
        <input
          type="text"
          name="last_name"
          value={quoteForm.last_name}
          onChange={handleNameUpdate}
        />
      </label>
      <span>Address</span>
      <label>
        Line 1
        <input
          type="text"
          name="line_1"
          value={quoteForm.address.line_1}
          onChange={handleAddressUpdate}
        />
      </label>
      <label>
        Line 2
        <input
          type="text"
          name="line_2"
          value={quoteForm.address.line_2}
          onChange={handleAddressUpdate}
        />
      </label>
      <label>
        City
        <input
          type="text"
          name="city"
          value={quoteForm.address.city}
          onChange={handleAddressUpdate}
        />
      </label>
      <label>
        Region
        <input
          type="text"
          name="region"
          value={quoteForm.address.region}
          onChange={handleAddressUpdate}
        />
      </label>
      <label>
        Postal Code
        <input
          type="text"
          name="postal"
          value={quoteForm.address.postal}
          onChange={handleAddressUpdate}
        />
      </label>
      <button onClick={handleFormSubmit}>get free quote</button>
    </form>
  );
};
QuoteForm.propTypes = {
  quoteForm: PropTypes.object.isRequired,
  handleAddressUpdate: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  handleNameUpdate: PropTypes.func.isRequired,
};
