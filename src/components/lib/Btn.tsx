interface BtnProps {
    fn?: () => void;
    label: string;
    type: "submit" | "reset" | "button";
}

export const Btn = ({ fn, label, type }: BtnProps) => {
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
