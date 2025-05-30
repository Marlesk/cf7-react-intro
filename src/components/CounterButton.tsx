type ButtonProps = {
    onClick: () => void;
    disabled?: boolean;
    label: string;
    addClass?: string;
}

const CounterButton = ({onClick, disabled=false, label, addClass="bg-blue-500"} : ButtonProps) => {
    return (
        <>
            <button className={"disabled:bg-gray-400 text-white py-2 space-x-4 px-4 "+ addClass}
                    onClick={onClick}
                    disabled={disabled}>
                {label}
            </button>
        </>

    )
}

export default CounterButton