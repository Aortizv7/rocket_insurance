import "./App.css";
import React, { useState } from "react";
import axios from "axios";


//this app will have multiple steps, we need a form to submit the body in order to be able to request a quote
// second thing is to show the drop down menu view to update the quote all while maintaining state
//how to manage state? (redux/reduxify within the parent? )

const App = () => {
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

  const handleFormSubmit = () => {
    
    axios.post('https://fed-challenge-api.sure.now.sh/api/v1/quotes',quoteForm).then(response => {
      if(response.status === 200){
        console.log(response.data.quote)
        setQuoteData({...quoteData,...response.data.quote})
      }
    }).catch(error => console.log(error))

    setQuoteForm({
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
  };

  return (
    <div>
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
    </div>
  );
};

export default App;
