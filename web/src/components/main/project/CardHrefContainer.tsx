import type {ReactElement} from "react";

export const CardHrefContainer = ({children}: {children: ReactElement | ReactElement[]}) => {
    return (
        <div className="grid grid-cols-3 gap-2.5">
            {children}
        </div>
    );
};