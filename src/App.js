import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { QuoteForm } from "./QuoteForm";
import { VariableSelections } from "./VariableSelections";

const App = () => {
  const STEPS = {
    QUOTE_FORM: 0,
    VARIABLE_SELECTIONS: 1,
  };

  const [currentStep, setCurrentStep] = useState(STEPS.QUOTE_FORM);

  const [quoteForm, setQuoteForm] = useState({
    first_name: "",
    last_name: "",
    address: {
      line_1: "",
      line_2: "",
      city: "",
      region: "",
      postal: "",
    },
  });

  const [quoteData, setQuoteData] = useState();

  const handleNameUpdate = (event) => {
    const value = event.target.value;
    setQuoteForm({
      ...quoteForm,
      [event.target.name]: value,
    });
  };

  const handleAddressUpdate = (event) => {
    const value = event.target.value;

    setQuoteForm({
      ...quoteForm,
      address: {
        ...quoteForm.address,
        [event.target.name]: value,
      },
    });
  };

  const handleVariableSelections = (event) => {
    const value = event.target.value;

    setQuoteData({
      ...quoteData,
      variable_selections: {
        ...quoteData.variable_selections,
        [event.target.name]: Number(value),
      },
    });
  };

  const handleFormSubmit = (event) => {
    axios
      .post(`https://fed-challenge-api.sure.now.sh/api/v1/quotes`, quoteForm)
      .then((response) => {
        if (response.status === 200) {
          setQuoteData({ ...quoteData, ...response.data.quote });
        }
      })
      .then(() => {
        setCurrentStep({ currentStep: STEPS.VARIABLE_SELECTIONS });
      })
      .catch((error) => console.log(error));
  };

  const handleQuoteUpdate = (event) => {
    axios
      .put(
        `https://fed-challenge-api.sure.now.sh/api/v1/quotes/${quoteData.quoteId}`,
        { quote: quoteData }
      )
      .then((response) => {
        if (response.status === 200) {
          setQuoteData({ ...response.data.quote });
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="container">
      {currentStep === STEPS.QUOTE_FORM ? (
        <QuoteForm
          quoteForm={quoteForm}
          handleFormSubmit={handleFormSubmit}
          handleAddressUpdate={handleAddressUpdate}
          handleNameUpdate={handleNameUpdate}
        />
      ) : (
        <VariableSelections
          quoteData={quoteData}
          handleVariableSelections={handleVariableSelections}
          handleQuoteUpdate={handleQuoteUpdate}
        />
      )}
    </div>
  );
};

export default App;
