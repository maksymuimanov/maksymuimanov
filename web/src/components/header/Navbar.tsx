import {ModeToggleButton} from "@/components/header/ModeToggleButton.tsx";
import {GithubButton} from "@/components/header/GithubButton.tsx";
import {LinkedinButton} from "@/components/header/LinkedinButton.tsx";

export const Navbar = () => {
    return (
        <nav className="flex w-full gap-1 px-4 lg:gap-2 lg:px-6">
            <div className="ml-auto flex items-center gap-4">
                <LinkedinButton />
                <GithubButton />
                <ModeToggleButton />
            </div>
        </nav>
    );
};