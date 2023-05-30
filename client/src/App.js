import React, { useState } from 'react';
import FormComponent from './FormComponent';
import DisplayComponent from './DisplayComponent';

const App = () => {//
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (data) => {
    setSubmittedData([...submittedData, data]);
  };

  return (
    <div>
      <h1>Inventory</h1>
      <FormComponent onSubmit={handleSubmit} />
      <DisplayComponent data={submittedData} />
    </div>
  );
};

export default App;
