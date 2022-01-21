import React from "react";
import { PropTypes } from "prop-types";

export const VariableSelections = (props) => {
  const { quoteData, handleVariableSelections, handleQuoteUpdate } = props;

  return (
    <form className="content" onSubmit={(e) => e.preventDefault()}>
        <span>
          Select from different options below to calculate your premium
        </span>
        {quoteData && (
          <div className="variableSelectionContent">
            <label>{quoteData.variable_options.deductible.title}</label>
            <select
              className="dropDown"
              onChange={handleVariableSelections}
              name="deductible"
            >
              {quoteData.variable_options.deductible.values.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <label>{quoteData.variable_options.asteroid_collision.title}</label>
            <select
              className="dropDown"
              onChange={handleVariableSelections}
              name="asteroid_collision"
            >
              {quoteData.variable_options.asteroid_collision.values.map(
                (item) => (
                  <option key={item}>{item}</option>
                )
              )}
            </select>
            <button className="button" onClick={handleQuoteUpdate}>
              Calculate Premium
            </button>
            {quoteData.premium && (
              <div className="premium">
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
