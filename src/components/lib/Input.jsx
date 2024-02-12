import React from "react";

const Input = ({ id, type, label, onChange, value }) => {
  return (
    <>
      <label htmlFor="amount">{label}:</label>
      <input id={id} type={type} onInput={onChange} value={value} />
    </>
  );
};
export default Input;
