import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div class="container">
      <h2>Profile</h2>
      <Link to="/home"> Back to Home Page</Link>
      <br />
      <br />
      <div class="row">
        <div class="col">
          <div class="p-3 border bg-light">
            <h3>Full Name</h3>
            <input type="text" required maxLength={50}></input>
            <h3>Address 1</h3>
            <input type="text" required maxLength={100}></input>
            <h3>Address 2</h3>
            <input type="text" optional maxLength={100}></input>
          </div>
        </div>
        <div class="col">
          <div class="p-3 border bg-light">
            <h3>City</h3>
            <input type="text" required maxLength={100}></input>
            <h3>State</h3>
            <select>
              <option value="AL">AL</option>
              <option value="AK">AK</option>
              <option value="AZ">AZ</option>
              <option value="AR">AR</option>
              <option value="CA">CA</option>
              <option value="CO">CO</option>
              <option value="CT">CT</option>
              <option value="DE">DE</option>
              <option value="DC">DC</option>
              <option value="FL">FL</option>
              <option value="GA">GA</option>
              <option value="HI">HI</option>
              <option value="ID">ID</option>
              <option value="IL">IL</option>
              <option value="IN">IN</option>
              <option value="IA">IA</option>
              <option value="KS">KS</option>
              <option value="KY">KY</option>
              <option value="LA">LA</option>
              <option value="ME">ME</option>
              <option value="MD">MD</option>
              <option value="MA">MA</option>
              <option value="MI">MI</option>
              <option value="MN">MN</option>
              <option value="MS">MS</option>
              <option value="MO">MO</option>
              <option value="MT">MT</option>
              <option value="NE">NE</option>
              <option value="NV">NV</option>
              <option value="NH">NH</option>
              <option value="NJ">NJ</option>
              <option value="NM">NM</option>
              <option value="NY">NY</option>
              <option value="NC">NC</option>
              <option value="ND">ND</option>
              <option value="OH">OH</option>
              <option value="OK">OK</option>
              <option value="OR">OR</option>
              <option value="PA">PA</option>
              <option value="RI">RI</option>
              <option value="SC">SC</option>
              <option value="SD">SD</option>
              <option value="TN">TN</option>
              <option value="TX">TX</option>
              <option value="UT">UT</option>
              <option value="VT">VT</option>
              <option value="VA">VA</option>
              <option value="WA">WA</option>
              <option value="WV">WV</option>
              <option value="WI">WI</option>
              <option value="WY">WY</option>
            </select>
            <h3>Zipcode</h3>
            <input type="text" required maxLength={9} minLength={5}></input>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
