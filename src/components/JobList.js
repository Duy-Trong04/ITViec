import React from 'react';

function JobList({ jobs, onJobSelect }) {
    return (
        <div className="job-list">
            {jobs.map((job) => (
                <div key={job.id} className="job-item" onClick={() => onJobSelect(job)}>
                    <p className="posted-time">Posted {job.posted}</p>
                    <h3 className="job-title1">{job.title}</h3>
                    <div className="company-info">
                        <img src={job.logo} alt={job.company} className="company-logo" />
                        <span>{job.company}</span>
                    </div>
                    <p className="salary">💰 <a href="#">Sign in to view salary</a></p>
                    <p className="location">
                        🏢 {job.workplace} <br />
                        📍 {job.location}
                    </p>
                    <div className="tags">
                        {job.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        
    );
}

export default JobList;
