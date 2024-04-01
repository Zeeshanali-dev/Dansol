import React, { useState } from "react";
import Select from "react-select";

export default function SelectOpt({
  label,
  disabled,
  className,
  options = "null",
  isClearable = "true",
  isSearchable,
}) {
  const [selectedOption, setSelectedOption] = useState([options[0]]);

  return (
    <div className="my-2">
      <label className="text-[15px] font-bold mb-2">{label}</label>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isClearable={isClearable}
        isDisabled={disabled}
        isSearchable={isSearchable}
        className={`${className}`}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? "none" : "none",
            boxShadow: state.isFocused ? "none" : "none",
            "&:hover": {
              borderColor: "none",
            },
          }),
          clearIndicator: (baseStyles, state) => ({
            ...baseStyles,
            color: "#2367AE",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isFocused ? "#307BC9" : "white",
            color: state.isFocused ? "White" : "black",
          }),
          container: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? "none" : "none",
            boxShadow: "none",
          }),
          isDisabled: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isFocused ? "transparent" : "transparent",
          }),
        }}
      />
    </div>
  );
}
