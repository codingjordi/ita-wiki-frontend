import { ReactNode } from "react";

const Container = ({children} : {children: ReactNode}) => {
    return(
        <div className="h-full flex flex-col">
        <div className="flex-1 bg-white rounded-xl mb-6 mx-6 py-6 px-20">
            {children}
        </div>
        </div>
    )
}

export default Container;