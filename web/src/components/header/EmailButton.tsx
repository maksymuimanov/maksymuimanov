import {Button} from "@/components/ui/button.tsx";
import {LucideMail} from "lucide-react";
import {
    Popover,
    PopoverTrigger,
} from "@/components/ui/popover"
import {CopyEmailPopoverContent} from "@/components/header/CopyEmailPopoverContent.tsx";

export const EmailButton = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="cursor-pointer" variant="outline" size="icon">
                    <LucideMail className="h-[1.2rem] w-[1.2rem] scale-100" />
                </Button>
            </PopoverTrigger>
            <CopyEmailPopoverContent />
        </Popover>
    );
};