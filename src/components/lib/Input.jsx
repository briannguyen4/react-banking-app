import React from "react";

const Input = ({ id, type, label, onChange, value }) => {
  return (
    <>
      <label htmlFor="amount" style={{ color: "darkgreen" }}>
        {label}:{" "}
      </label>
      <input
        id={id}
        type={type}
        onInput={onChange}
        value={value}
        style={{ width: "100px", border: "2px solid seagreen" }}
      />
    </>
  );
};
export default Input;
