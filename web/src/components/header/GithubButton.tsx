import {GithubIcon} from "lucide-react";
import {HrefButton} from "@/components/common/HrefButton.tsx";

export const GithubButton = () => {
    return (
        <HrefButton href="https://github.com/maksymuimanov" aClassName="absolute h-[2.0rem] w-[2.0rem]" buttonVariant="outline" buttonSize="icon">
            <GithubIcon className="h-[1.2rem] w-[1.2rem] scale-100" />
        </HrefButton>
    );
};