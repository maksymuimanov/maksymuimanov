import {
    Popover,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger
} from "@/components/ui/popover.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Bird} from "@/components/bird/Bird.tsx";
import {RadioTowerIcon} from "lucide-react";

export const OpenToWorkButton = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="cursor-pointer h-9 font-mono" variant="outline">
                    <RadioTowerIcon /> Open To Work
                </Button>
            </PopoverTrigger>
            <PopoverContent align="end">
                <PopoverHeader className="font-mono">
                    <PopoverTitle className="flex justify-center mb-2">
                        <div className="w-full rounded-2xl border-2 border-secondary shadow-xl bg-linear-to-b from-background flex justify-center">
                            <Bird />
                        </div>
                    </PopoverTitle>
                    <PopoverDescription>
                        <span>
                            If you know anyone who looks for
                            Java/Java+React Developers, let me know about them!
                            I appreciate all kind of help!
                        </span>
                    </PopoverDescription>
                </PopoverHeader>
            </PopoverContent>
        </Popover>
    );
};