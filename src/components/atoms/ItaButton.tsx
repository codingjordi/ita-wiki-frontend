
import { FC, ReactNode } from 'react'

type ItaBtnVariant = "default" | "github" | "close" | "submit" | "reset" | "icon";
interface ItaButtonProps {
    children?: ReactNode;
    variant?: ItaBtnVariant;
    text?: string;
    icon?: string;
    type?: "button" | "submit" | "reset"
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const classList = {
    default: "inline-flex items-center gap-4 text-xl py-2 px-4 rounded-md bg-[#B91879] hover:bg-[rgba(185, 24, 121,0.5)] transition-all duration-200 ease-in-out active:scale-95 border-2 border-2-white hover:border-stone-5400",
    secundary: "inline-flex items-center gap-4 text-xl py-2 px-4 rounded-md bg-[#7E7E7E] border-color[#7E7E7E] hover:bg-[rgb(126, 126, 126,0.2),transition-all duration-200 ease-in-out active:scale-95 border-2",
    icon: 'bg[#009896]',
    github: 'text-[var(--github-color)] bg-[var(--github-bg)]  justify-between max-w-60 hover:bg-[var(--github-color)] hover:text-[var(--github-bg)] hover:border-black',
    close: "bg-[var(--btn-close-bg)] text-[var(--btn-close-color)] font-bold",
    submit: "bg-green-300 text-white",
    reset: "bg-green-500 text-white"
}


const ItaButton: FC<ItaButtonProps> = ({ children, variant, text, icon, type, onClick }) => {
    return (
        <button type={type || "button"} onClick={onClick} className={classList[variant || "default"]}>
            {icon && <i>{icon}</i>}
            {text || children}
        </button>
    )
}

export default ItaButton;