import { FC } from "react";

interface DropdownButtonComponentProps {
    title: string | null;
    onClick?: () => void;
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
            title={title || "Usuario"}
            onClick={onClick}
            className={`flex items-center justify-center gap-3 px-3 py-1 mx-3 text-[0.85rem] whitespace-nowrap transition rounded-md cursor-pointer ${disabled ? "cursor-not-allowed" : "hover:bg-[#fcecec]"}`}
            disabled={disabled}
        >
            <span>{title && title.charAt(0).toUpperCase() + title.slice(1)}</span>
            {icon && <img src={icon} alt={`${title} icon`} className="w-4 h-4" />}
        </button>
    );
};

export default DropdownButtonComponent;