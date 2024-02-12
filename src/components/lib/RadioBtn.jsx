import React from "react";

const RadioBtn = ({ id, checked, onChange, label }) => {
  return (
    <>
      <input type="radio" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default RadioBtn;
