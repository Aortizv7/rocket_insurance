import React from "react";
import { PropTypes } from "prop-types";
import "./App.css";
export const VariableSelections = (props) => {
  const { quoteData, handleVariableSelections, handleQuoteUpdate } = props;

  console.log("data??",quoteData)
  return (
    <form className="content" onSubmit={(e)=>e.preventDefault()}>
      <span>this will show the information</span>
      {quoteData && (
        <div>
          <span>{quoteData.quoteId}</span>
          <label>{quoteData.variable_options.deductible.title}</label>
          <select onChange={handleVariableSelections} name="deductible">
            {quoteData.variable_options.deductible.values.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <label>{quoteData.variable_options.asteroid_collision.title}</label>
          <select onChange={handleVariableSelections} name="asteroid_collision">
            {quoteData.variable_options.asteroid_collision.values.map(
              (item) => (
                <option key={item}>{item}</option>
              )
            )}
          </select>
          <button onClick={handleQuoteUpdate}>get new data</button>
          {quoteData.premium && (
            <div>
              {quoteData.premium.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </div>
          )}
        </div>
      )}
    </form>
  );
};

VariableSelections.propTypes = {
  quoteData: PropTypes.object,
  handleVariableSelections: PropTypes.func.isRequired,
  handleQuoteUpdate: PropTypes.func.isRequired,
};
