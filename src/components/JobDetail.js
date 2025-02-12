import React from "react";

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
        </div>
      </div>

      {/* Nút Apply Now */}
      <button className="apply-btn">Apply now</button>

      {/* Thông tin chi tiết */}
      <div className="job-info">
        <p><strong>📍 Address:</strong> {selectedJob.address}</p>
        <p><strong>📅 Posted:</strong> {selectedJob.posted}</p>
        <p><strong>🏢 Workplace:</strong> {selectedJob.workplace}</p>
      </div>

      {/* Danh sách kỹ năng */}
      <div className="job-skills">
        <p className="section">Skills:</p>
        <div className="skill-list">
          {selectedJob.tags.map((tag, index) => (
            <span key={index} className="skill-item">{tag}</span>
          ))}
        </div>
      </div>

      {/* Lợi ích */}
      <div className="job-benefits">
        <h3 className="section-title">Top 3 reasons to join us:</h3>
        <ul className="benefit-list">
          {selectedJob.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default JobDetails;
