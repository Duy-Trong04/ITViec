import React, { useState } from "react";
import { Filter } from "lucide-react";

const JobFilter = () => {
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
  const [selectedSalaries, setSelectedSalaries] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);

  const levelOptions = [
    { value: "Fresher", label: "Fresher" },
    { value: "Junior", label: "Junior" },
    { value: "Senior", label: "Senior" },
    { value: "Manager", label: "Manager" },
  ];

  const modelOptions = [
    { value: "At office", label: "At office" },
    { value: "Remote", label: "Remote" },
    { value: "Hybrid", label: "Hybrid" },
  ];

  const salaryOptions = [
    { value: "$500 - $1000", label: "$500 - $1000" },
    { value: "$1000 - $2000", label: "$1000 - $2000" },
    { value: "$2000+", label: "$2000+" },
  ];

  const industryOptions = [
    { value: "Software", label: "Software" },
    { value: "Finance", label: "Finance" },
    { value: "Healthcare", label: "Healthcare" },
    { value: "Education", label: "Education" },
  ];

  const handleCheckboxChange = (setSelected, selected, option) => {
    if (selected.includes(option.value)) {
      setSelected(selected.filter((item) => item !== option.value));
    } else {
      setSelected([...selected, option.value]);
    }
  };

  const Dropdown = ({ placeholder, options, selected, setSelected }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="custom-dropdown" style={{ position: "relative" }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            padding: "5px 10px",
            backgroundColor: "#f0f0f0",
            border: "1px solid #ccc",
            borderRadius: "5px",
            cursor: "pointer",
            minWidth: "110px",
            textAlign: "left",
          }}
        >
          {placeholder}
        </button>
        {isOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: "0",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "5px",
              zIndex: "1000",
              width: "100%",
              marginTop: "5px",
            }}
          >
            {options.map((option) => (
              <div
                key={option.value}
                style={{
                  padding: "5px 10px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => handleCheckboxChange(setSelected, selected, option)}
              >
                <input
                  type="checkbox"
                  checked={selected.includes(option.value)}
                  readOnly
                  style={{ marginRight: "10px", accentColor: "red" }}
                />
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className="job-filter-container"
      style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
    >
      <h2 className="job-count" style={{ marginBottom: "20px" }}>
        978 IT jobs in Vietnam
      </h2>
      <div
        className="filter-bar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Dropdown
            placeholder="Level"
            options={levelOptions}
            selected={selectedLevels}
            setSelected={setSelectedLevels}
          />
          <Dropdown
            placeholder="Working Model"
            options={modelOptions}
            selected={selectedModels}
            setSelected={setSelectedModels}
          />
          <Dropdown
            placeholder="Salary"
            options={salaryOptions}
            selected={selectedSalaries}
            setSelected={setSelectedSalaries}
          />
          <Dropdown
            placeholder="Industry"
            options={industryOptions}
            selected={selectedIndustries}
            setSelected={setSelectedIndustries}
          />
        </div>
        <button
          className="filter-button"
          style={{
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            padding: "5px 10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <Filter className="filter-icon" style={{ marginRight: "5px" }} />{" "}
          Filter
        </button>
      </div>
    </div>
  );
};

export default JobFilter;