import type {ReactElement} from "react";

export const BadgeContainer = ({children}: {children: ReactElement | ReactElement[]}) => {
    return (
        <div className="h-40">
            <div className=" grid grid-cols-6 gap-1.5">
                {children}
            </div>
        </div>
    );
};