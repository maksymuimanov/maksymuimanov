import {
    Popover,
    PopoverTrigger
} from "@/components/ui/popover.tsx";
import {Button} from "@/components/ui/button.tsx";
import {RadioTowerIcon} from "lucide-react";
import {OpenToWorkPopoverContent} from "@/components/popover/OpenToWorkPopoverContent.tsx";

export const OpenToWorkButton = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="cursor-pointer h-9 font-mono" variant="outline">
                    <RadioTowerIcon /> Open To Work
                </Button>
            </PopoverTrigger>
            <OpenToWorkPopoverContent />
        </Popover>
    );
};