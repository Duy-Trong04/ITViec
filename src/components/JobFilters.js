import React, { useState, useRef, useEffect } from "react";
import { Filter } from "lucide-react";


function getDropdownButtonLabel(label, selectedValues, options) {
  if (selectedValues.length === 0) {
    return label; // không có lựa chọn => giữ nguyên label gốc
  } else if (selectedValues.length === 1) {
    // tìm option tương ứng
    const found = options.find((o) => o.value === selectedValues[0]);
    return found ? found.label : label;
  } else {
    
    const firstValue = selectedValues[0];
    const firstOption = options.find((o) => o.value === firstValue);
    const firstLabel = firstOption ? firstOption.label : label;
    const moreCount = selectedValues.length - 1;
    return `${firstLabel}, +${moreCount}`;
  }
}

const FilterDropdown = ({ label, options, selectedValues, setSelectedValues }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  
  const toggleDropdown = () => {
    setOpen(!open);
  };

  // Kiểm tra xem một option đã được chọn hay chưa
  const isChecked = (value) => selectedValues.includes(value);

  // Thêm/bỏ chọn một option
  const handleCheckboxChange = (value) => {
    if (isChecked(value)) {
      // Nếu đã chọn -> Bỏ chọn
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } else {
      // Nếu chưa chọn -> Thêm vào
      setSelectedValues([...selectedValues, value]);
    }
  };

  // Label hiển thị trên nút
  const buttonLabel = getDropdownButtonLabel(label, selectedValues, options);

  return (
    <div className="dropdown" ref={dropdownRef} style={{ position: "relative" }}>
      {/* Nút bấm mở dropdown */}
      <button
        type="button"
        onClick={toggleDropdown}
        style={{
          border: "1px solid #ccc",
          backgroundColor: "#fff",
          borderRadius: "20px",
          padding: "5px 12px",
          cursor: "pointer",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        {buttonLabel}
        <svg
          style={{ width: "auto", height: "28px", opacity: 0.6 }}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
        </svg>
      </button>

      {/* Danh sách checkbox */}
      {open && (
        <div
          className="dropdown-menu"
          style={{
            position: "absolute",
            top: "38px",
            left: 0,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "6px",
            zIndex: 9999,
            padding: "6px 0",
            minWidth: "300px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          {options.map((option) => (
            <label
              key={option.value}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "6px 10px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              <input
                type="checkbox"
                checked={isChecked(option.value)}
                onChange={() => handleCheckboxChange(option.value)}
                style={{ marginRight: "15px", accentColor: "red",transform: "scale(2.0)", marginBottom: "8px"}}
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

const JobFilter = () => {
  // State cho từng nhóm filter
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
  const [selectedSalaries, setSelectedSalaries] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);

  // Các tùy chọn
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
    { value: "Consumer Goods", label: "Consumer Goods" },
    { value: "E-commerce", label: "E-commerce" },
    { value: "Education and Training", label: "Education and Training" },
    { value: "Banking", label: "Banking" },
    { value: "Food & Beverage", label: "Food & Beverage" },
    { value: "Game", label: "Game" },
  ];

  // Tính tổng số filter đã chọn trên tất cả dropdown
  const totalSelected =
    selectedLevels.length +
    selectedModels.length +
    selectedSalaries.length +
    selectedIndustries.length;

  // Hàm xóa toàn bộ filter
  const clearAll = () => {
    setSelectedLevels([]);
    setSelectedModels([]);
    setSelectedSalaries([]);
    setSelectedIndustries([]);
  };

  return (
    <div
      className="job-filter-container"
      style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
    >
      <h2 style={{ marginBottom: "10px", marginTop: '-110px', fontSize: '28px'}}>
        20 IT jobs in Vietnam
      </h2>

      {/* Thanh filter */}
      <div
        className="filter-bar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {/* Bốn dropdown (Level, Working Model, Salary, Industry) */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <FilterDropdown
            label="Level"
            options={levelOptions}
            selectedValues={selectedLevels}
            setSelectedValues={setSelectedLevels}
          />
          <FilterDropdown
            label="Working Model"
            options={modelOptions}
            selectedValues={selectedModels}
            setSelectedValues={setSelectedModels}
          />
          <FilterDropdown
            label="Salary"
            options={salaryOptions}
            selectedValues={selectedSalaries}
            setSelectedValues={setSelectedSalaries}
          />
          <FilterDropdown
            label="Industry"
            options={industryOptions}
            selectedValues={selectedIndustries}
            setSelectedValues={setSelectedIndustries}
          />

          {/* Nút Clear hiển thị nếu có ít nhất 1 filter được chọn */}
          {totalSelected > 0 && (
            <button
              onClick={clearAll}
              style={{
                border: "none",
                background: "none",
                cursor: "pointer",
                fontSize: "14px",
                textDecoration: "underline",
              }}
            >
              Clear
            </button>
          )}
        </div>
        <button
          className="filter-button"
          style={{
            position: "relative",
            fontSize: "15px",
            display: "flex",
            alignItems: "center",
            padding: "5px 10px",
            backgroundColor: "#fff",
            color: "black",
            border: "1px solid black",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: 300,
          }}
        >
          <Filter style={{ marginRight: "4px" }} />
          Filter

          {totalSelected > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-6px",
                right: "-6px",
                backgroundColor: "red",
                color: "#fff",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: 500,
              }}
            >
              {totalSelected}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default JobFilter;
