import {Badge} from "@/components/ui/badge.tsx";
import type {ReactElement} from "react";

export const IconBadge = ({children}: {children: ReactElement}) => {
    return (
        <Badge className="w-full h-7.5 bg-linear-to-b from-card to-secondary border-accent" variant="outline">
            {children}
        </Badge>
    );
};