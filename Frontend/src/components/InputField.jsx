import React from "react";

const InputField = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  className,
}) => {
  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      {label && <label className="text-sm font-medium mb-1">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default InputField;
