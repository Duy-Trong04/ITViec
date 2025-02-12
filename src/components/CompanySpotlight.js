import React from 'react';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const CompanySpotlight = () => {
  return (
    <div className="company-spotlight">
      <div className="spotlight-label">Company Spotlight</div>

      <div style={{ position: 'relative' }}>
        <img
          src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeVNPVmc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--399f7d7d7b0977c73a8c930a6d2d00724027d37b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFsZ0NNQT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--c7ff83b896d4db7bd4f14a67b569154fd1b65a60/1000013345.jpg"
          alt="MB Bank"
          className="company-image"
        />
        <div className="company-logo1">
          <img src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMmZvSXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--88c82102b4c6782414b90e4077f75449b9789560/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/Logo%20MB%20he%20mau%20RGB%2001.png" alt="MB Logo" />
        </div>
      </div>

      <div className="company-info1">
        <h3>MB Bank</h3>
        <p>
          <FaMapMarkerAlt /> Ha Noi
        </p>
        <p>Ngân hàng TMCP Quân Đội (MB)</p>
        <a href="/">View 10 jobs {'>'}</a>
      </div>

      <div className="divider"></div>

      <div className="job-listings">
        <div className="job-item1">
          <FaArrowRight className="job-icon" /> AI-AI Engineer (Python/ Django/ C++) - Khối CNTT
        </div>
        <div className="job-item1">
          <FaArrowRight className="job-icon" /> Fullstack Developer (Java/ ReactJS/SQL) - All Level
        </div>
        <div className="job-item1">
          <FaArrowRight className="job-icon" /> Backend Developer (Java/Spring/Oracle) - All Level
        </div>
      </div>
    </div>
  );
};

export default CompanySpotlight;
