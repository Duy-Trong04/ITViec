import React, { useState } from "react";
import { Filter } from "lucide-react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

// Tuỳ chỉnh hiển thị checkbox mà không thay đổi thứ tự
const customOption = (props) => {
  const { data, isSelected, innerRef, innerProps } = props;
  return (
    <div
      ref={innerRef}
      {...innerProps}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "5px",
        cursor: "pointer",
      }}
    >
      <input
        type="checkbox"
        checked={isSelected}
        readOnly
        style={{ marginRight: "10px", accentColor: "red" }} // Dấu tick màu đỏ
      />
      {data.label}
    </div>
  );
};

// Giữ nguyên giá trị được chọn nhưng không thay đổi vị trí
const customMultiValue = ({ data }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <input
      type="checkbox"
      checked
      readOnly
      style={{ marginRight: "5px", accentColor: "red" }} // Dấu tick màu đỏ
    />
    {data.label}
  </div>
);

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

  const customStyles = {
    control: (provided) => ({
      ...provided,
      minWidth: 110,
      width: "auto", // Chiều rộng linh hoạt
      maxWidth: "100%",
      borderRadius: '20px',
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 9999, // Đảm bảo menu hiển thị trên cùng
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#e3f2fd", // Màu nền của option đã chọn
      borderRadius: "4px",
      padding: "2px",
    }),
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
          <Select
            closeMenuOnSelect={false}
            components={{
              Option: customOption,
              MultiValue: customMultiValue,
              animatedComponents,
            }}
            isMulti
            options={levelOptions}
            value={selectedLevels}
            onChange={setSelectedLevels}
            placeholder="Level"
            menuPortalTarget={document.body}
            styles={customStyles}
          />
          <Select
            closeMenuOnSelect={false}
            components={{
              Option: customOption,
              MultiValue: customMultiValue,
              animatedComponents,
            }}
            isMulti
            options={modelOptions}
            value={selectedModels}
            onChange={setSelectedModels}
            placeholder="Working Model"
            menuPortalTarget={document.body}
            styles={customStyles}
          />
          <Select
            closeMenuOnSelect={false}
            components={{
              Option: customOption,
              MultiValue: customMultiValue,
              animatedComponents,
            }}
            isMulti
            options={salaryOptions}
            value={selectedSalaries}
            onChange={setSelectedSalaries}
            placeholder="Salary"
            menuPortalTarget={document.body}
            styles={customStyles}
          />
          <Select
            closeMenuOnSelect={false}
            components={{
              Option: customOption,
              MultiValue: customMultiValue,
              animatedComponents,
            }}
            isMulti
            options={industryOptions}
            value={selectedIndustries}
            onChange={setSelectedIndustries}
            placeholder="Industry"
            menuPortalTarget={document.body}
            styles={customStyles}
          />
        </div>
        <button
          className="filter-button"
          style={{
            fontSize: "15px",
            display: "flex",
            alignItems: "center",
            padding: "5px 10px",
            backgroundColor: "#fffff",
            color: "black",
            border: "1px sold black",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "300"
          }}
        >
          <Filter className="filter-icon" style={{ marginRight: "2px" }} />{" "}
          Filter
        </button>
      </div>
    </div>
  );
};

export default JobFilter;