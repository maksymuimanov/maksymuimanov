import {PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle} from "@/components/ui/popover.tsx";
import {Bird} from "@/components/bird/Bird.tsx";

export const OpenToWorkPopoverContent = () => {
    return (
        <PopoverContent align="end">
            <PopoverHeader className="font-mono">
                <PopoverTitle className="flex justify-center mb-2">
                    <div className="w-full rounded-2xl border-2 border-secondary shadow-xl bg-linear-to-b from-background flex justify-center">
                        <div className="absolute grid place-items-center w-25 h-20">
                            <span className="text-secondary text-center">\(•◡•)/</span>
                        </div>
                        <Bird />
                    </div>
                </PopoverTitle>
                <PopoverDescription>
                        <span>
                            Hire me please or contact me if you know anyone who is hiring software engineers!
                        </span>
                </PopoverDescription>
            </PopoverHeader>
        </PopoverContent>
    );
};