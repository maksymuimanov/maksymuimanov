import {LinkedinIcon} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

export const LinkedinButton = () => {
    return (
        <Button className="cursor-pointer" variant="outline" size="icon">
            <a className="absolute h-[2.0rem] w-[2.0rem]" target="_blank" href="https://www.linkedin.com/in/w4t3rcs/" />
            <LinkedinIcon className="h-[1.2rem] w-[1.2rem] scale-100" />
        </Button>
    );
};