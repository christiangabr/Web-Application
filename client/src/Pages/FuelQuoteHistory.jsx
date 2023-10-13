import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FuelQuoteHistory() {
  const [backendData, setbackendData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:3001/quoteHistory").then(
      response => response.json()
    ).then(
      data => {
        setbackendData(data) 
      }
    )
  }, [])

  return (
    <div class="container">
      <h2>Fuel Quote History</h2>
      <div class="p-3 border bg-light">
        <div class="divTable">
          <div class="divTableBody">
            <div class="divTableRow">
              <div class="divTableCell">Gallons Requested</div>
              <div class="divTableCell">Delivery Address</div>
              <div class="divTableCell">Delivery Date</div>
              <div class="divTableCell">Suggested Price</div>
              <div class="divTableCell">Total Amount Due</div>
            </div>

            <div class="divTableRow">
              <div class="divTableCell">{backendData.gallonsReq}</div>
              <div class="divTableCell">{backendData.deliveryAddress}</div>
              <div class="divTableCell">{backendData.deliveryDate}</div>
              <div class="divTableCell">{backendData.suggestedPrice}</div>
              <div class="divTableCell">{backendData.totalAmountDue}</div>
            </div>

            <div class="divTableRow">
              <div class="divTableCell">&nbsp;</div>
              <div class="divTableCell">&nbsp;</div>
              <div class="divTableCell">&nbsp;</div>
              <div class="divTableCell">&nbsp;</div>
              <div class="divTableCell">&nbsp;</div>
            </div>

            <div class="divTableRow">
              <div class="divTableCell">&nbsp;</div>
              <div class="divTableCell">&nbsp;</div>
              <div class="divTableCell">&nbsp;</div>
              <div class="divTableCell">&nbsp;</div>
              <div class="divTableCell">&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FuelQuoteHistory;
