import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CompanySpotlight from './components/CompanySpotlight';
import JobFilters from './components/JobFilters';
import JobList from './components/JobList';
import JobDetails from './components/JobDetail';
import Footer from './components/Footer';

function App() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  // Gọi API khi component render
  useEffect(() => {
    fetch('https://6724d671c39fedae05b2efb7.mockapi.io/0306221384/TruongDuyTrong/job/')
      .then(response => response.json())
      .then(data => {
        const formattedJobs = data.slice(0, 20).map(item => ({
          id: item.id,
          title: item.title,
          logo: item.logo,
          company: item.company,
          location: item.location,
          posted: item.posted,
          skills: item.skills,
          benefits: item.benefits,
          description: item.description,
          workplace: item.workplace,
          address: item.address,
          superHot: item.superHot
        }));
        setJobs(formattedJobs);
      })
      .catch(error => console.error('Lỗi khi lấy dữ liệu:', error));
  }, []);

  return (
    <div className="App">
      <Header />
      <CompanySpotlight />
      <JobFilters />
      <div className='job-container'>
        <JobList jobs={jobs} onJobSelect={setSelectedJob} />
        <JobDetails job={selectedJob} jobs={jobs} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
