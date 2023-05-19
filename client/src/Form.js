import React, { useState } from "react";
import { dateFormat } from "./date_format";
import { data } from "./nationality";
import { mobile_country } from "./mobile_country_code";
const Form = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [title, setTitle] = useState("");
  const [nationality, setNationality] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [date, setDateFormat] = useState("");
  const [country, setCountry] = useState("");
  const [radioSelected, setRadioSelected] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const handleRadioChange = (event) => {
    setRadioSelected(event.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Perform form submission or data handling here
    console.log("Form submitted!");
  };
  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.checked);
  };

  return (
    <div className="form-container">
      <h1>Registration Form</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <select
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="mr">Mr.</option>
            <option value="mrs">Mrs.</option>
            <option value="miss">Miss</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="nationality">Nationality:</label>
          <select
            id="nationality"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            required
          >
            <option value="">{nationality}</option>
            {data.map((nation) => (
              <option value={nation.nationality} key={nation.country}>
                {nation.nationality}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dateformat">DateFormat:</label>
          <select
            id="dateformat"
            value={date}
            onChange={(e) => setDateFormat(e.target.value)}
            required
          >
            <option value="">Select</option>
            {dateFormat.map((date) => (
              <option value={date} key={date}>
                {date}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option value="">Select</option>
            {mobile_country.map((country) => (
              <option value={country.country} key={country.country}>
                {country.country}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <div className="mobile-input">
            <select
              id="countryCode"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              required
            >
              <option value={mobileNumber}>Select</option>
              {mobile_country.map((code) => (
                <option value={code.country} key={code.country}>
                  {code.mcc}
                </option>
              ))}
            </select>
            <input
              type="text"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <p>Residence</p>
          <label>
            <input
              type="radio"
              value="radioOption1"
              checked={radioSelected === "radioOption1"}
              onChange={handleRadioChange}
            />
            Home
          </label>
          <label>
            <input
              type="radio"
              value="radioOption2"
              checked={radioSelected === "radioOption2"}
              onChange={handleRadioChange}
            />
            Office
          </label>
        </div>
        <div>
          <p>Choose Favorite Language</p>
          <label htmlFor="java">
            <input
              type="checkbox"
              checked={checkboxChecked}
              onChange={handleCheckboxChange}
            />
            Java
          </label>

          <label htmlFor="python">
            <input
              type="checkbox"
              checked={checkboxChecked}
              onChange={handleCheckboxChange}
            />
            Python
          </label>

          <label htmlFor="Javascript">
            <input
              type="checkbox"
              checked={checkboxChecked}
              onChange={handleCheckboxChange}
            />
            JavaScript
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
