import React, { useEffect, useRef, useState } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineWorkOutline, MdAttachMoney } from "react-icons/md";

function JobList({ jobs, onJobSelect }) {
    const jobListRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 4;
    const totalPages = Math.ceil(jobs.length / jobsPerPage);

    useEffect(() => {
        const handleScroll = (event) => {
            const jobList = jobListRef.current;
            if (!jobList) return;
            const isMouseOverJobList = jobList.contains(document.elementFromPoint(event.clientX, event.clientY));
            if (isMouseOverJobList) {
                const atTop = jobList.scrollTop === 0;
                const atBottom = jobList.scrollTop + jobList.clientHeight >= jobList.scrollHeight;
                if ((event.deltaY < 0 && atTop) || (event.deltaY > 0 && atBottom)) {
                    event.preventDefault(); 
                    window.scrollBy(0, event.deltaY);
                }
            }
        };

        window.addEventListener("wheel", handleScroll, { passive: false });
        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const getPages = () => {
        const pages = [];
        if (totalPages <= 4) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Trang đầu
            pages.push(1);

            // Thêm ... nếu currentPage > 3
            if (currentPage > 3) {
                pages.push("...");
            }

            // Các trang ở giữa (currentPage-1, currentPage, currentPage+1)
            let startPage = Math.max(2, currentPage - 1);
            let endPage = Math.min(totalPages - 1, currentPage + 1);
            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            // Thêm ... nếu currentPage < totalPages - 2
            if (currentPage < totalPages - 1) {
                pages.push("...");
            }

            // Trang cuối
            pages.push(totalPages);
        }
        return pages;
    };

    return (
        <div>
            <div className="job-list" ref={jobListRef}>
                {currentJobs.map((job) => (
                    <div key={job.id} className="job-item" onClick={() => onJobSelect(job)}>
                        <p className="posted-time">Posted {job.posted}</p>
                        <h3 className="job-title1">{job.title}</h3>
                        <div className="company-info">
                            <img src={job.logo} alt={job.company} className="company-logo" />
                            <span>{job.company}</span>
                        </div>
                        <p className="salary">
                            <MdAttachMoney /> <a href="#">Sign in to view salary</a>
                        </p>
                        <p className="location">
                            <MdOutlineWorkOutline style={{ color: 'gray' }} /> {job.workplace} <br />
                            <FaMapMarkerAlt style={{ color: 'gray' }} /> {job.location}
                        </p>
                        <div className="tags">
                            {job.skills.map((skill, index) => (
                                <span key={index} className="tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Chỉ hiển thị phân trang khi có nhiều hơn jobsPerPage */}
            {jobs.length > jobsPerPage && (
                <div className="pagination">
                    

                    {getPages().map((page, index) => {
                        // Nếu là dấu ...
                        if (page === "...") {
                            return (
                                <span key={index} className="ellipsis">
                                    ...
                                </span>
                            );
                        }
                        // Nếu là số trang
                        return (
                            <button
                                key={index}
                                onClick={() => paginate(page)}
                                className={currentPage === page ? "active" : ""}
                            >
                                {page}
                            </button>
                        );
                    })}

                    <button 
                        onClick={() => paginate(currentPage + 1)} 
                        disabled={currentPage === totalPages}
                    >
                        &gt;
                    </button>
                </div>
            )}
        </div>
    );
}

export default JobList;
