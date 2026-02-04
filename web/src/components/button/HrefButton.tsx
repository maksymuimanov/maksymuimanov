import {Button} from "@/components/ui/button.tsx";
import React, {type ReactElement} from "react";

interface HrefButtonProperties {
    href: string
    buttonClassName?: string
    buttonVariant?: "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | null
    buttonSize?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null
    aClassName?: string
    children?: ReactElement
}

export const HrefButton: React.FC<HrefButtonProperties> = (
    {
        buttonClassName = "cursor-pointer",
        buttonVariant = "default",
        buttonSize = "default",
        aClassName = "",
        ...props
    })=> {
    return (
        <Button className={buttonClassName} variant={buttonVariant} size={buttonSize}>
            <a className={aClassName} target="_blank" href={props.href} />
            {props.children}
        </Button>
    );
};