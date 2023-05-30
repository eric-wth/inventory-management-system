import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        //Fetch data from the backend API
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
          // Send a GET request to the backend API
          const response = await axios.get('http://localhost:8000/products');
    
          // Set the data received from the backend in the component state
          setData(response.data);
        }
        catch (err) {
          // Handle errors if the request fails
          console.error(err);
        }
    };

  return (
    <div>
      <h2>Submitted Data</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <strong>Product_Name:</strong> {item.product_name},
            <strong>Quantity:</strong> {item.quantity},
            <strong>Supplier:</strong> {item.supplier},
            <strong>Patient_Name:</strong> {item.patient_name},
            <strong>Patient_telephone:</strong> {item.patient_telephone},
            <strong>Patient_hospital:</strong> {item.patient_hospital},
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayComponent;
