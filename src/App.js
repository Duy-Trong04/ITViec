import React, {useState} from 'react';
import Header from './components/Header';
import CompanySpotlight from './components/CompanySpotlight';
import JobFilters from './components/JobFilters';
import JobList from './components/JobList';
import JobDetails from './components/JobDetail';


function App() {
  
const [selectedJob, setSelectedJob] = useState(null);
const jobs = [
  {
      id: 1,
      title: "Junior/Senior Business Analyst",
      logo: "https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOEJwSFE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--10a9cdf11d126baa55d2186b1dd97bc867eb9a9e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcGFXbHAiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--20b0435834affc851fb8b496383cefc8135158a8/logo%20FSOFT%20d%E1%BB%8Dc.png",
      company: "TPIsoftware Co., Ltd",
      location: "Ho Chi Minh",
      posted: "20 minutes ago",
      tags: ["Business Analyst", "English"],
      benefits: [
      "Professional and international working environment",
      "Golden career path",
      "Attractive salary"
      ],
      workplace: "At office",
      address: "Lầu 7, Phòng 706 - 707 - 708, Tòa nhà Hoàng Anh Safomec",
      superHot: true
  },
  {
      id: 2,
      title: "Test Manager (QA, Agile, Good English)",
      logo: "https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMEsyS3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--4b5cc18760ca6faffd873169d9cab5740dbf1b3a/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcGFXbHAiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--20b0435834affc851fb8b496383cefc8135158a8/Logo.jpg",
      company: "Contemi Vietnam",
      location: "Ho Chi Minh",
      posted: "2 hours ago",
      tags: ["QA", "Agile", "English"],
      benefits: ["Attractive salary", "Career growth", "Flexible work hours"],
      workplace: "At office",
      address: "District 1, Ho Chi Minh",
      superHot: false
  },
  {
    id: 3,
    title: "Test Manager (QA, Agile, Good English)",
    logo: "https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMEsyS3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--4b5cc18760ca6faffd873169d9cab5740dbf1b3a/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcGFXbHAiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--20b0435834affc851fb8b496383cefc8135158a8/Logo.jpg",
    company: "Contemi Vietnam",
    location: "Ho Chi Minh",
    posted: "2 hours ago",
    tags: ["QA", "Agile", "English"],
    benefits: ["Attractive salary", "Career growth", "Flexible work hours"],
    workplace: "At office",
    address: "District 1, Ho Chi Minh",
    superHot: false
  }
]

  return (
    <div className="App">
      <Header />
      <CompanySpotlight />
      <JobFilters />
      <div className='job-container'>
        {/* Danh sach cong viec */}
        <JobList jobs={jobs} onJobSelect={setSelectedJob}/>
        {/* Chi tiet cong viec */}
        <JobDetails job={selectedJob} jobs = {jobs}/>
      </div>
      
    </div>
  );
}

export default App;