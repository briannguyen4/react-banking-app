interface InputProps {
    id: string;
    label: string;
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const Input = ({ id, type, label, onChange, value }: InputProps) => {
    return (
        <>
            <label htmlFor={id} style={{ color: "darkgreen" }}>
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
