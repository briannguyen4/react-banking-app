import React from 'react';
type ButtonType = "submit" | "reset" | "button";

export const Btn = ({ fn, label, type }: { 
  fn?: () => void; // Type annotation for fn prop: a function that takes no arguments and returns void
  label: string; // Type annotation for label prop: a string
  type: ButtonType; // Specify the type as ButtonType
}) => {
  return (
    <button
      type={type}
      style={{
        backgroundColor: "#c1debd",
        fontWeight: "700",
        padding: "10px",
        marginTop: "8px",
      }}
      onClick={fn}
    >
      {label}
    </button>
  );
};
