import React from "react";

const RadioBtn = ({ id, checked, onChange, label }) => {
  return (
    <>
      <input
        type="radio"
        id={id}
        checked={checked}
        onChange={onChange}
        style={{ accentColor: "teal" }}
      />
      <label htmlFor={id} style={{ marginRight: "10px" }}>
        {label}
      </label>
    </>
  );
};

export default RadioBtn;
