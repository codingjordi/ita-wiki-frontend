import { FC } from "react";

interface DropdownButtonComponentProps {
    title: string;
    onClick: () => void;
    icon?: string;
    disabled?: boolean;
};

const DropdownButtonComponent: FC<DropdownButtonComponentProps> = ({
    title,
    onClick,
    icon,
    disabled = false
}) => {
    return (
        <button
            title={title}
            onClick={onClick}
            className={`w-10 h-10 flex items-center justify-center transition rounded-md cursor-pointer
                ${disabled ? "cursor-not-allowed" : "hover:bg-[#fcecec]"}`}
            disabled={disabled}
        >
            {icon && <img src={icon} alt={`${title} icon`} className="w-4 h-4" />}
        </button>
    );
};

export default DropdownButtonComponent;