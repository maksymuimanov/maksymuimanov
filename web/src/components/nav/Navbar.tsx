import {ModeToggleButton} from "@/components/button/ModeToggleButton.tsx";
import {GithubButton} from "@/components/button/GithubButton.tsx";
import {LinkedinButton} from "@/components/button/LinkedinButton.tsx";
import {EmailButton} from "@/components/button/EmailButton.tsx";
import {OpenToWorkButton} from "@/components/button/OpenToWorkButton.tsx";

export const Navbar = () => {
    return (
        <nav className="flex w-full gap-1 px-4 lg:gap-2 lg:px-6">
            <div className="mr-auto flex items-center gap-4">
                <OpenToWorkButton />
            </div>
            <div className="ml-auto flex items-center gap-4">
                <EmailButton />
                <LinkedinButton />
                <GithubButton />
                <ModeToggleButton />
            </div>
        </nav>
    );
};