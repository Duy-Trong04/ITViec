import React, { useEffect, useRef } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineWorkOutline, MdAttachMoney } from "react-icons/md";

function JobList({ jobs, onJobSelect }) {
    const jobListRef = useRef(null);

    useEffect(() => {
        const handleScroll = (event) => {
            const jobList = jobListRef.current;

            if (!jobList) return;

            const isMouseOverJobList = jobList.contains(document.elementFromPoint(event.clientX, event.clientY));

            if (isMouseOverJobList) {
                const atTop = jobList.scrollTop === 0;
                const atBottom = jobList.scrollTop + jobList.clientHeight >= jobList.scrollHeight;

                if ((event.deltaY < 0 && atTop) || (event.deltaY > 0 && atBottom)) {
                    event.preventDefault(); // Ngăn chặn cuộn trong `job-list`
                    window.scrollBy(0, event.deltaY); // Cuộn trang web xuống
                }
            }
        };

        window.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);

    return (
        <div className="job-list" ref={jobListRef}>
            {jobs.map((job) => (
                <div key={job.id} className="job-item" onClick={() => onJobSelect(job)}>
                    <p className="posted-time">Posted {job.posted}</p>
                    <h3 className="job-title1">{job.title}</h3>
                    <div className="company-info">
                        <img src={job.logo} alt={job.company} className="company-logo" />
                        <span>{job.company}</span>
                    </div>
                    <p className="salary"><MdAttachMoney /> <a href="#">Sign in to view salary</a></p>
                    <p className="location">
                        <MdOutlineWorkOutline style={{ color: 'gray' }} /> {job.workplace} <br />
                        <FaMapMarkerAlt style={{ color: 'gray' }} /> {job.location}
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
