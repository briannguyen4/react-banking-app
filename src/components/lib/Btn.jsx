//component > lib > Btn.jsx
export const Btn = ({ fn, label, type }) => {
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
