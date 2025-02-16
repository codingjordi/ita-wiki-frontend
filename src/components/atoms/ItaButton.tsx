
import { FC, ReactNode } from 'react'
import closeIcon from "../../assets/close.svg";

type ItaBtnVariant = "default" | "secundary" | "github" | "close" | "icon";
interface ItaButtonProps {
    children?: ReactNode;
    variant?: ItaBtnVariant;
    text?: string;
    icon?: string;
    type?: "button" | "submit" | "reset"
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const classList = {
    default: "block w-full h-[63px] text-[16px] text-white font-semibold capitalize text-center rounded-[12px] my-[15px] bg-[#B91879] hover:bg-[#c44d95] transition-all duration-200 ease-in-out border-2 border-[#B91879] hover:border-[#c44d95] hover:scale-95 hover:duration-100 will-change-transform outline-none cursor-pointer box-sizing",
    secundary: "block w-full h-[63px] text-[16px] text-[#7e7e7e] font-semibold capitalize text-center rounded-[12px] my-[15px] bg-[#fff] hover:bg-[#dcdcdc] transition-all duration-200 ease-in-out border-2 border-[#aeaeae] hover:border-[#aeaeae] hover:scale-95 hover:duration-100 will-change-transform outline-none cursor-pointer box-sizing",
    github: 'text-[var(--github-color)] bg-[var(--github-bg)]  justify-between max-w-60 hover:bg-[var(--github-color)] hover:text-[var(--github-bg)] hover:border-black outline-none cursor-pointer box-sizing',
    close: "inline-flex items-center justify-center w-[21px] h-[19px] text-[#282828] bg-transparent border-none hover:duration-100 will-change-transform hover:opacity-50 outline-none cursor-pointer box-sizing",
    icon: "inline-flex items-center justify-center h-[41px] px-4 text-[#808080] border-2 rounded-[10px] border-white bg-white hover:duration-200 will-change-transform ease-in-out hover:bg-[#dcdcdc]  hover:border-[#808080] hover:scale-95 outline-none cursor-pointer box-sizing",
}


const ItaButton: FC<ItaButtonProps> = ({ children, variant, text, icon, type, onClick }) => {
    return (
        <button type={type || "button"} onClick={onClick} className={classList[variant || "default"]}>
            {variant === 'close' && <img src={closeIcon} alt="Close" className="close-icon" />}
            {variant === 'icon' && <img src={icon} alt="icon" className="h-[17px]" />}
            {text || children}
        </button>
    )
}

export default ItaButton;