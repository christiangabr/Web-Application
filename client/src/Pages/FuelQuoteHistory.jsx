import React, { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const FuelQuoteHistory = () => {
  const { user } = useAuthContext();
  const [backendData, setbackendData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/prices', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          }
        });
        const json = await response.json();
        setbackendData(json); // Update the state with the fetched data
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user.token]);

  return (
    <div className="container">
      <h2>Fuel Quote History</h2>
      <div className="p-3 border bg-light">
        <div className="divTable">
          <div className="divTableBody">
            <div className="divTableRow">
              <div className="divTableCell">Gallons Requested</div>
              <div className="divTableCell">Delivery Address</div>
              <div className="divTableCell">Delivery Date</div>
              <div className="divTableCell">Suggested Price</div>
              <div className="divTableCell">Total Amount Due</div>
            </div>

            {isLoading ? (
              <div className="divTableRow">
                <div className="divTableCell">Loading...</div>
              </div>
            ) : (
              backendData.map((item, index) => (
                <div className="divTableRow" key={index}>
                  <div className="divTableCell">{item.gallonsReq}</div>
                  <div className="divTableCell">{item.deliveryAddress}</div>
                  <div className="divTableCell">{item.deliveryDate}</div>
                  <div className="divTableCell">{item.suggestedPrice}</div>
                  <div className="divTableCell">{item.totalAmountDue}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FuelQuoteHistory;
