import type {ReactElement} from "react";

export const BadgeContainer = ({children}: {children: ReactElement | ReactElement[]}) => {
    return (
        <div className="h-70">
            {children}
        </div>
    );
};