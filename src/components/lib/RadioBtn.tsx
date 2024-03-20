interface RadioBtnProps {
    id: string;
    label: string;
    checked: boolean;
    onChange: () => void;
}

const RadioBtn = ({ id, checked, onChange, label }: RadioBtnProps) => {
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
