import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const DisplayProfile = () => {
  const { user } = useAuthContext();
  const [backendData, setbackendData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          }
        });
        const json = await response.json();
        setbackendData(json); 
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user.token]);


  return (
    <div class="container">
      <h2>Profile</h2>
      {isLoading ? (
        <div>
          <div>Loading...</div>
        </div>
      ) : (
        backendData.map((item, idx) => (
          <div key={index}>
            <label>Full Name</label>
            <h6>{item.fullName}</h6>
            <label>address1</label>
            <h6>{item.address1}</h6>
            <label>address2</label>
            <h6>{item.address2}</h6>
            <label>city</label>
            <h6>{item.city}</h6>
            <label>state</label>
            <h6>{item.state}</h6>
            <label>zipCode</label>
            <h6>{item.zipCode}</h6>
          </div>
        ))
      )}
      
    </div>
  );
};
export default DisplayProfile;
