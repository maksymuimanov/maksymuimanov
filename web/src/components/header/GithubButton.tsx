import {GithubIcon} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

export const GithubButton = () => {
    return (
        <Button className="cursor-pointer" variant="outline" size="icon">
            <a className="absolute h-[2.0rem] w-[2.0rem]" target="_blank" href="https://github.com/maksymuimanov" />
            <GithubIcon className="h-[1.2rem] w-[1.2rem] scale-100" />
        </Button>
    );
};