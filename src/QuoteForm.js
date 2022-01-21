import React from "react";
import { PropTypes } from "prop-types";

export const QuoteForm = (props) => {
  const {
    quoteForm,
    handleAddressUpdate,
    handleFormSubmit,
    handleNameUpdate,
    onClearForm,
  } = props;

  return (
    <form className="content" onSubmit={(e) => e.preventDefault()}>
      <span>Fill this form out to receive a free quote</span>
      <div className="formContent">
        <label className="formLabel">
          First Name
          <input
            className="formInput"
            type="text"
            name="first_name"
            value={quoteForm.first_name}
            onChange={handleNameUpdate}
          />
        </label>
        <label>
          Last Name
          <input
            className="formInput"
            type="text"
            name="last_name"
            value={quoteForm.last_name}
            onChange={handleNameUpdate}
          />
        </label>
        <span>Address:</span>
        <label>
          Line 1
          <input
            className="formInput"
            type="text"
            name="line_1"
            value={quoteForm.address.line_1}
            onChange={handleAddressUpdate}
          />
        </label>
        <label>
          Line 2
          <input
            className="formInput"
            type="text"
            name="line_2"
            value={quoteForm.address.line_2}
            onChange={handleAddressUpdate}
          />
        </label>
        <label>
          City
          <input
            className="formInput"
            type="text"
            name="city"
            value={quoteForm.address.city}
            onChange={handleAddressUpdate}
          />
        </label>
        <label>
          Region
          <input
            className="formInput"
            type="text"
            name="region"
            value={quoteForm.address.region}
            onChange={handleAddressUpdate}
          />
        </label>
        <label>
          Postal Code
          <input
            className="formInput"
            type="text"
            name="postal"
            value={quoteForm.address.postal}
            onChange={handleAddressUpdate}
          />
        </label>
      </div>
      <div className="buttonWrapper">
        <button className="button" onClick={onClearForm}>
          Start Over
        </button>
        <button className="button" onClick={handleFormSubmit}>
          Next
        </button>
      </div>
    </form>
  );
};
QuoteForm.propTypes = {
  quoteForm: PropTypes.object.isRequired,
  handleAddressUpdate: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  handleNameUpdate: PropTypes.func.isRequired,
  onClearForm: PropTypes.func.isRequired,
};
