//component > lib > Btn.jsx
export const Btn = ({ fn, label, type }) => {
  return (
    <button type={type} style={{ padding: "10px" }} onClick={fn}>
      {label}
    </button>
  );
};
