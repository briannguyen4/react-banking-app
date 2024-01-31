export const Btn = ({ fn, btnText }) => {
    return (
        <button style={{ padding: "10px" }} onClick={fn}>
            {btnText}
        </button>
    );
};
