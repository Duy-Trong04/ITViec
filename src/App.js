import React from 'react';
import Header from './components/Header';
import CompanySpotlight from './components/CompanySpotlight';
import JobFilters from './components/JobFilters';

function App() {
  return (
    <div className="App">
      <Header />
      <CompanySpotlight />
      <JobFilters />
    </div>
  );
}

export default App;