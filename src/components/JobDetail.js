import React from "react";
import {FaMapMarkerAlt, FaRegClock, FaRegHeart  } from "react-icons/fa";
import { MdOutlineWorkOutline, MdAttachMoney  } from "react-icons/md";
function JobDetails({ job, jobs }) {
  // Nếu không có công việc nào được chọn, dùng công việc đầu tiên
  const selectedJob = job || (jobs && jobs.length > 0 ? jobs[0] : null);

  if (!selectedJob) {
    return <div className="job-placeholder">No job available.</div>;
  }

  return (
    <div className="job-card">
      {/* Logo */}
      <div className="job-header">
        <img src={selectedJob.logo} alt="Company Logo" className="job-logo" />
        <div>
          <h2 className="job-title">{selectedJob.title}</h2>
          <p className="job-meta">{selectedJob.company} - {selectedJob.location}</p>
          <p className="salary"><MdAttachMoney /> <a href="#">Sign in to view salary</a></p>
        </div>
      </div>

      {/* Nút Apply Now */}
      <div style={{display: 'flex', alignItems: 'center', gap: '20px', paddingRight: '5px'}}>
        <button className="apply-btn">Apply now</button>
        <a href="#" style={{color: '#f10529', fontSize: '30px'}}><FaRegHeart  /></a>
        
      </div>
      
      <hr style={{marginTop: '30px'}}></hr>
      {/* Thông tin chi tiết */}
      <div className="job-info">
        <p><FaMapMarkerAlt style={{color: 'gray'}}/> {selectedJob.address}</p>
        <p><MdOutlineWorkOutline style={{color: 'gray'}}/> {selectedJob.workplace}</p>
        <p><FaRegClock style={{color: 'gray'}}/> {selectedJob.posted}</p>
      </div>
      
      {/* Danh sách kỹ năng */}
      <div className="job-skills">
        <p className="section" style={{fontSize: '15px', color: 'gray'}}>Skills:</p>
        <div className="skill-list">
          {selectedJob.skills.map((tag, index) => (
            <span key={index} className="skill-item">{tag}</span>
          ))}
        </div>
      </div>
      <hr style={{border: 'none', borderTop: '1px dashed gray'}}></hr>
      {/* Lợi ích */}
      <div className="job-benefits">
        <h3 className="section-title">Top 3 reasons to join us</h3>
        <ul className="benefit-list">
          {selectedJob.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
      <hr style={{border: 'none', borderTop: '1px dashed gray'}}></hr>
      {/* Mô tả */}
      <div className="job-description">
        <h3 className="section-title">Job description</h3>
        <ul className="benefit-list">
          {selectedJob.description.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default JobDetails;
