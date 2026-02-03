import {ModeToggleButton} from "@/components/header/ModeToggleButton.tsx";
import {GithubButton} from "@/components/header/GithubButton.tsx";
import {LinkedinButton} from "@/components/header/LinkedinButton.tsx";

export const Header = () => {
    return (
        <header className="flex h-15 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
            <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
                <div className="ml-auto flex items-center gap-4">
                    <LinkedinButton />
                    <GithubButton />
                    <ModeToggleButton />
                </div>
            </div>
        </header>
    );
};