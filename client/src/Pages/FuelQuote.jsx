import React from 'react'
import Calendar from '../components/Calendar/Calendar'

function FuelQuote() {
    return (
        <div class="container">
            <h2>Fuel Quote</h2>
            <div class="row">
                <div class="col">
                    <h3>Gallons Requested</h3>
                    <input type="text" required></input>
                    <h3>Delivery Address</h3>
                    <p>[PlaceHolder]</p>
                    <h3>Delivery Date</h3>
                    <Calendar />
                </div>
                <div class="col">
                    <h3>Suggested Price</h3>
                    <input type="text" required></input>
                    <h3>Total Amount Due</h3>
                    <input type="text" required></input>
                </div>
            </div>
        </div>
    )
}

export default FuelQuote;

// import React from 'react'
// import { Link } from 'react-router-dom'

// function FuelQuote() {
//     return (
//         <div class="container">
//             <h2>Fuel Quote</h2>
//             <div class="p-3 border bg-light">
//                 <h3>Gallons Requested</h3>
//                 <input type="text" required></input>
//                 <h3>Delivery Address</h3>
//                 <h3>Delivery Date</h3>
//                 <h3>Suggested Price</h3>
//                 <h3>Total Amount Due</h3>
//             </div>
//         </div>
//     )
// }

// export default FuelQuote;