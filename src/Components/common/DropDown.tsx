import type React from "react";

interface Option {
  value: string | number;
  label: string;
}

interface DropdownProps {
  options: Option[];
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
}

const Dropdown : React.FC<DropdownProps> = ({ options = [], value, onChange, name }) => {
  return (
    <select
      className='filter-dropdown'
      value={value}
      onChange={onChange}
      name={name}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
