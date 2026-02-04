import {LinkedinIcon} from "lucide-react";
import {HrefButton} from "@/components/button/HrefButton.tsx";

export const LinkedinButton = () => {
    return (
        <HrefButton href="https://www.linkedin.com/in/w4t3rcs/" aClassName="absolute h-[2.0rem] w-[2.0rem]" buttonVariant="outline" buttonSize="icon">
            <LinkedinIcon className="h-[1.2rem] w-[1.2rem] scale-100" />
        </HrefButton>
    );
};