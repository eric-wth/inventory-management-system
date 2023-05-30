import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://inventory-sys.onrender.com/products');
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Inventory</h1>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Supplier</th>
            <th>Patient Name</th>
            <th>Patient Telephone</th>
            <th>Patient Hospital</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item._id}>
              <td>{item.product_name}</td>
              <td>{item.quantity}</td>
              <td>{item.supplier}</td>
              <td>{item.patient_name}</td>
              <td>{item.patient_telephone}</td>
              <td>{item.patient_hospital}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
