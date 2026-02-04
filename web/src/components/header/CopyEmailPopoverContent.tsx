import {PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle} from "@/components/ui/popover.tsx";
import {CopyButton} from "@/components/button/CopyButton.tsx";

export const CopyEmailPopoverContent = () => {
    return (
        <PopoverContent align="center">
            <PopoverHeader className="">
                <PopoverTitle className="font-mono">
                    <span className=""> Email: </span>
                    <span className="italic font-bold">uimanovmaks@gmail.com</span>
                </PopoverTitle>
                <PopoverDescription>
                    <CopyButton content="uimanovmaks@gmail.com" />
                </PopoverDescription>
            </PopoverHeader>
        </PopoverContent>
    );
};