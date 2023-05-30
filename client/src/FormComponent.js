import React, { useState } from 'react';
import axios from 'axios';

const FormComponent = ({ onSubmit }) => {
  const [product_name, setProduct_name] = useState('');
  const [quantity, setQuantity] = useState('');
  const [supplier, setSupplier] = useState('');
  const [patient_name, setPatient_name] = useState('');
  const [patient_telephone, setPatient_telephone] = useState('');
  const [patient_hospital, setPatient_hospital] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit({ product_name, quantity, supplier, patient_name, patient_telephone, patient_hospital});
    setProduct_name('');
    setQuantity('');
    setSupplier('');
    setPatient_name('');
    setPatient_telephone('');
    setPatient_hospital('');

    const formData = {
        product_name,
        quantity,
        supplier,
        patient_name,
        patient_telephone,
        patient_hospital
    };

    try{
        const response = await axios.post('http://localhost:8000/products', formData);
    }
    catch (err) {
        console.error(err);
    }
  };

  return (
    <div>
      <h2>Submit Data</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="product_name">Product Name:</label>
        <input
          type="text"
          id="product_name"
          value={product_name}
          onChange={(e) => setProduct_name(e.target.value)}
          required
        />

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="text"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />

        <label htmlFor="supplier">Supplier:</label>
        <input
          type="text"
          id="supplier"
          value={supplier}
          onChange={(e) => setSupplier(e.target.value)}
          required
        />

        <label htmlFor="patient_name">Patient Name:</label>
        <input
          type="text"
          id="patient_name"
          value={patient_name}
          onChange={(e) => setPatient_name(e.target.value)}
          required
        />

        <label htmlFor="patient_telephone">Patient Telephone:</label>
        <input
          type="number"
          id="patient_telephone"
          value={patient_telephone}
          onChange={(e) => setPatient_telephone(e.target.value)}
          required
        />

        <label htmlFor="patient_hospital">Patient Hospital:</label>
        <input
          type="text"
          id="patient_hospital"
          value={patient_hospital}
          onChange={(e) => setPatient_hospital(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
