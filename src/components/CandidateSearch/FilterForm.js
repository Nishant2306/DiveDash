import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

import './FilterForm.css'
const FilterForm = (props) => {
    const [dropdown1Value, setDropdown1Value] = useState('');
    const [dropdown2Value, setDropdown2Value] = useState('');
    const [dropdown3Value, setDropdown3Value] = useState('');
    const [dropdown4Value, setDropdown4Value] = useState('');
  
    const handleDropdown1Change = (event) => {
      setDropdown1Value(event.target.value);
    };
  
    const handleDropdown2Change = (event) => {
      setDropdown2Value(event.target.value);
    };
  
    const handleDropdown3Change = (event) => {
      setDropdown3Value(event.target.value);
    };
  
    const handleDropdown4Change = (event) => {
      setDropdown4Value(event.target.value);
    };
  
    const handleSearch = () => {
      // Perform search/filter logic using the dropdown values
      if(dropdown1Value === "Male"){
        
      }
    };
  
    const handleCancel = () => {
      // Clear the dropdown values
      setDropdown1Value('');
      setDropdown2Value('');
      setDropdown3Value('');
      setDropdown4Value('');
    };
  
    return (
      <div className="filter-form">
        <select className="filter-dropdown" value={dropdown1Value} onChange={handleDropdown1Change}>
          <option value="">Gender</option>
          <option value="option1">Female</option>
          <option value="option2">Male</option>
        </select>
        <select className="filter-dropdown" value={dropdown2Value} onChange={handleDropdown2Change}>
          <option value="">Age</option>
          <option value="option1">Less than 22</option>
          <option value="option2">22 to 24</option>
          <option value="option3">24 to 26</option>
          <option value="option4">above 26</option>
        </select>
        <select className="filter-dropdown" value={dropdown3Value} onChange={handleDropdown3Change}>
          <option value="">Region</option>
          <option value="option1">Andhra Pradesh</option>
          <option value="option2">Arunachal Pradesh</option>
          <option value="option3">Assam</option>
          <option value="option4">Bihar</option>
          <option value="option5">Chhattisgarh</option>
          <option value="option6">Goa</option>
          <option value="option7">Gujarat</option>
          <option value="option8">Haryana</option>
          <option value="option9">Himachal Pradesh</option>
          <option value="option10">Jharkhand</option>
          <option value="option11">Karnataka</option>
          <option value="option12">Kerala</option>
          <option value="option13">Madhya Pradesh</option>
          <option value="option14">Maharashtra</option>
          <option value="option15">Manipur</option>
          <option value="option16">Meghalaya</option>
          <option value="option17">Mizoram</option>
          <option value="option18">Nagaland</option>
          <option value="option19">Odisha</option>
          <option value="option20">Punjab</option>
          <option value="option21">Rajasthan</option>
          <option value="option22">Sikkim</option>
          <option value="option23">Tamil Nadu</option>
          <option value="option24">Telangana</option>
          <option value="option25">Tripura</option>
          <option value="option26">Uttarakhand</option>
          <option value="option27">Uttar Pradesh</option>
          <option value="option28">West Bengal</option>
        </select>
        <select className="filter-dropdown" value={dropdown4Value} onChange={handleDropdown4Change}>
          <option value="">Language</option>
          <option value="option1">Hindi</option>
          <option value="option1">Marathi</option>
          <option value="option1">Telugu</option>
          <option value="option1">Tamil</option>
          <option value="option1">Bengali</option>
          <option value="option1">Urdu</option>
          <option value="option1">Kannada</option>
          <option value="option1">Gujarati</option>
          <option value="option1">Odia</option>
          {/* Add more options as needed */}
        </select>
        <div className="filter-buttons">
          <button className="searchBtn"onClick={handleSearch}>
            <BsSearch/>
          </button>
          <button className="cancelBtn"onClick={handleCancel}>
            <MdOutlineCancel/>
          </button>
        </div>
      </div>
    );
  };

  export default FilterForm;

