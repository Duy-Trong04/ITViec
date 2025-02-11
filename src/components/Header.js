import React from "react";
import { FaChevronDown } from "react-icons/fa"; // Import icon mũi tên xuống
import { FaSearch } from "react-icons/fa"; // Import icon tìm kiếm
import {FaMapMarkerAlt } from "react-icons/fa";
const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <img
              src="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png"
              alt="NAB Logo"
              style={{ width: "90px", marginRight: "20px" }}
            />
          </li>
          <li className="nav-item">
            All Jobs <FaChevronDown className="arrow-icon" />
          </li>
          <li className="nav-item">
            IT Companies <FaChevronDown className="arrow-icon" />
          </li>
          <li className="nav-item">
            Blog <FaChevronDown className="arrow-icon" />
          </li>
        </ul>
        <div className="auth">
          <a href="#">For Employers</a>
          <a href="#">Sign In/Sign up</a>
          <a href="#" className="lang" style={{textDecoration: 'none', fontSize: '16px'}}>EN</a>
          <p style={{padding:'0 0 4px 9px'}}>|</p>
          <a href="#" className="lang" style={{color: 'gray', textDecoration: 'none', fontSize: '16px'}}>VI</a>
        </div>
      </nav>
      <hr className="hr"/>
      <div className="search-bar">
        <div className="select-container">
          <FaMapMarkerAlt className="select-icon" />
          <select className="city-dropdown">
            <option>All Cities</option>
            <option>Ho Chi Minh</option>
            <option>Ha Noi</option>
            <option>Da Nang</option>
            <option>Others</option>
          </select>
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="Enter keyword skill (Java, iOS...), job title, company..."
        />
        <button className="search-button">
          <FaSearch />
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
