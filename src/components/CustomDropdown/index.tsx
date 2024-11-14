import React from 'react';

import './style.css';

type Option = {
  value: string;
  label: string;
  icon: React.ReactNode;
};

type CustomDropdownProps = {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
};

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
  value,
  onChange,
  options,
}) => {
  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className="custom-dropdown">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="dropdown-select"
      >
        <option value="" disabled hidden>
          Select Platform
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="dropdown-option"
          >
            {option.label}
          </option>
        ))}
      </select>
      <div className="dropdown-display">
        {selectedOption?.icon && (
          <span className="dropdown-icon">{selectedOption.icon}</span>
        )}
        <span>{selectedOption ? selectedOption.label : 'Select Platform'}</span>
      </div>
    </div>
  );
};
