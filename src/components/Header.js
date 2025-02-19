import React, { useState } from "react";
import { FaChevronDown, FaChevronRight, FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <img
              src="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png"
              alt="ITViec Logo"
              style={{ width: "90px", marginRight: "20px" }}
            />
          </li>
          <li className="nav-item" onMouseEnter={() => setOpenMenu("jobs")} onMouseLeave={() => setOpenMenu(null)}>
            <a href="#" style={{textDecoration: "none", color: 'gray'}}>All Jobs <FaChevronDown className="arrow-icon" /></a>
            {openMenu === "jobs" && (
              <ul className="submenu">
                <li onMouseEnter={() => setOpenSubMenu("skill")} onMouseLeave={() => setOpenSubMenu(null)}>
                  <a href="#" style={{textDecoration: "none" , color: "gray"}}>Jobs by Skill <FaChevronRight className="arrow-icon" /></a>
                  {openSubMenu === "skill" && (
                    <ul className="sub-submenu">
                      <li>Java</li>
                      <li>PHP</li>
                      <li>JavaScript</li>
                      <li>HTML5</li>
                      <li>Manager</li>
                      <li>SQL</li>
                      <li>Android</li>
                      <li>IOS</li>
                      <li>MySQL</li>
                      <li>Tester</li>
                      <li>English</li>
                      <li>Ruby</li>
                      <li>Python</li>
                      <li>Mobile Apps</li>
                      <li>Ruby on Rails</li>
                      <li>QA QC</li>
                      <li>Database</li>
                      <li>.NET</li>
                      <li>Business Analyst</li>
                      <li>Linux</li>
                      <li>Team Leader</li>
                      <li>NodeJS</li>
                      <li>System Engineer</li>
                      <li>Designer</li>
                      <li>UI-UX</li>
                      <li>Project Manager</li>
                      <li>OOP</li>
                      <li>Oracle</li>
                      <li>MVC</li>
                      <li>ReactJS</li>
                      <li>Embedded</li>
                      <li>J2EE</li>
                    </ul>
                  )}
                </li>
                <li onMouseEnter={() => setOpenSubMenu("skill")} onMouseLeave={() => setOpenSubMenu(null)}>
                  <a href="#" style={{textDecoration: "none" , color: "gray"}}>Jobs by Title <FaChevronRight className="arrow-icon" /></a>
                  {openSubMenu === "skill" && (
                    <ul className="sub-submenu">
                      <li>Java Developer</li>
                      <li>PHP Developer</li>
                      <li>JavaScript Developer</li>
                      <li>HTML5 Developer</li>
                      <li>SQL Developer</li>
                      <li>Android Developer</li>
                      <li>IOS Developer</li>
                      <li>Tester</li>
                      <li>Ruby Developer</li>
                      <li>Python Developer</li>
                      <li>Ruby on Rails Developer</li>
                      <li>.NET Developer</li>
                      <li>NodeJS Developer</li>
                      <li>OOP Developer</li>
                      <li>Oracle Developer</li>
                      <li>C++ Developer</li>
                      <li>Wordpress Developer</li>
                      <li>Designer</li>
                      <li>Database Administrator</li>
                      <li>Mobile Apps Developer</li>
                      <li>Project Manager</li>
                      <li>Project Owner</li>
                      <li>Bridge Engineer</li>
                    </ul>
                  )}
                </li>
                <li onMouseEnter={() => setOpenSubMenu("skill")} onMouseLeave={() => setOpenSubMenu(null)}>
                  <a href="#" style={{textDecoration: "none" , color: "gray"}}>Jobs by Company <FaChevronRight className="arrow-icon" /></a>
                  {openSubMenu === "skill" && (
                    <ul className="sub-submenu">
                      <li>TymeX</li>
                      <li>NAB Innovation Centre</li>
                      <li>Vetnam</li>
                      <li>Saigon Technology</li>
                      <li>Doctor Anywhere</li>
                      <li>MONEY FORWARD</li>
                      <li>VIETNAM CO.,LTD</li>
                      <li>Trusting Social</li>
                      <li>SkyLab</li>
                      <li>LG CNS Việt Nam</li>
                      <li>NEC Vietnam</li>
                      <li>PVcomBank</li>
                      <li>FPT Software</li>
                      <li>Techcom Securities</li>
                      <li>MB Bank</li>
                      <li>Capgemini Vietnam</li>
                      <li>Techcombank</li>
                      <li>Endava Việt Nam</li>
                      <li>Công ty TNHH Thankslab</li>
                      <li>Việt Nam</li>
                      <li>Hatachi Services</li>
                      <li>FWD VTC</li>
                      <li>MB Ageas Life</li>
                      <li>Viettel Group</li>
                      <li>Hybrid Technologies</li>
                      <li>Global Fashion Group</li>
                      <li>Simple Tech Investment</li>
                    </ul>
                  )}
                </li>
                <li onMouseEnter={() => setOpenSubMenu("skill")} onMouseLeave={() => setOpenSubMenu(null)}>
                  <a href="#" style={{textDecoration: "none" , color: "gray"}}>Jobs by City <FaChevronRight className="arrow-icon" /></a>
                  {openSubMenu === "skill" && (
                    <ul className="sub-submenu" style={{height: 'auto', width: 'auto'}}>
                      <li>Ho Chi Minh</li>
                      <li>Ha Noi</li>
                      <li>Da Nang</li>
                      <li>Others</li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item" onMouseEnter={() => setOpenMenu("jobs")} onMouseLeave={() => setOpenMenu(null)}>
            <a href="#" style={{textDecoration: "none", color: 'gray'}}>IT Companies <FaChevronDown className="arrow-icon" /></a>
            {openMenu === "jobs" && (
              <ul className="submenu">
                <li onMouseEnter={() => setOpenSubMenu("skill")} onMouseLeave={() => setOpenSubMenu(null)} style={{width: '250px'}}>
                  <a href="#" style={{textDecoration: "none" , color: "gray"}}>Vietnam Best IT Companies <FaChevronRight className="arrow-icon" /></a>
                  {openSubMenu === "skill" && (
                    <ul className="sub-submenu" style={{height: 'auto', width: '170px'}}>
                      <li>Best IT Companies 2024</li>
                      <li>Best IT Companies 2023</li>
                      <li>Best IT Companies 2022</li>
                      <li>Best IT Companies 2021</li>
                      <li>Best IT Companies 2020</li>
                      <li>Best IT Companies 2019</li>
                    </ul>
                  )}
                </li>
                <li onMouseEnter={() => setOpenSubMenu("skill")} onMouseLeave={() => setOpenSubMenu(null)}>
                  <a href="#" style={{textDecoration: "none" , color: "gray"}}>Company Reviews</a>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item"  onMouseEnter={() => setOpenMenu("jobs")} onMouseLeave={() => setOpenMenu(null)}>
            <a href="#" style={{textDecoration: "none", color: 'gray'}}>Blog <FaChevronDown className="arrow-icon" /></a>
            {openMenu === "jobs" && (
              <ul className="submenu">
                <li onMouseEnter={() => setOpenSubMenu("skill")} onMouseLeave={() => setOpenSubMenu(null)} style={{width: '250px'}}>
                  <a href="#" style={{textDecoration: "none" , color: "gray"}}>IT Salary Report <FaChevronRight className="arrow-icon" /></a>
                  {openSubMenu === "skill" && (
                    <ul className="sub-submenu" style={{height: 'auto', width: '180px'}}>
                      <li>IT Salary Report 2024-2025</li>
                      <li>IT Salary Report 2023-2024</li>
                      <li>IT Salary Report 2022-2023</li>
                    </ul>
                  )}
                </li>
                <li onMouseEnter={() => setOpenSubMenu("skill")} onMouseLeave={() => setOpenSubMenu(null)}>
                  <a href="#" style={{textDecoration: "none" , color: "gray"}}>IT Career</a>
                </li>
                <li onMouseEnter={() => setOpenSubMenu("skill")} onMouseLeave={() => setOpenSubMenu(null)}>
                  <a href="#" style={{textDecoration: "none" , color: "gray"}}>Applying & Career Up</a>
                </li>
                <li onMouseEnter={() => setOpenSubMenu("skill")} onMouseLeave={() => setOpenSubMenu(null)}>
                  <a href="#" style={{textDecoration: "none" , color: "gray"}}>IT Expertise</a>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div className="auth">
          <a href="#">For Employers</a>
          <a href="#">Sign In/Sign up</a>
          <a href="#" className="lang">EN</a>
          <p>|</p>
          <a href="#" className="lang" style={{color: 'gray'}}>VI</a>
        </div>
      </nav>
      <hr className="hr" />
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
        <input type="text" className="search-input" placeholder="Enter keyword skill (Java, iOS...), job title, company..." />
        <button className="search-button">
          <FaSearch /> Search
        </button>
      </div>
    </header>
  );
};

export default Header;
