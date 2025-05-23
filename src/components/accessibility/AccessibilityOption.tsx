import React from 'react';

interface AccessibilityOptionProps {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

const AccessibilityOption: React.FC<AccessibilityOptionProps> = ({
  label,
  value,
  options,
  onChange
}) => {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-2">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded min-h-[44px]"
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AccessibilityOption; 
 