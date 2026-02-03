import {ModeToggleButton} from "@/components/header/ModeToggleButton.tsx";
import {GithubButton} from "@/components/header/GithubButton.tsx";
import {LinkedinButton} from "@/components/header/LinkedinButton.tsx";

export const Header = () => {
    return (
        <header className="flex h-15 gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) sticky top-0 z-50 backdrop-blur-sm">
            <nav className="flex w-full gap-1 px-4 lg:gap-2 lg:px-6">
                <div className="ml-auto flex items-center gap-4">
                    <LinkedinButton />
                    <GithubButton />
                    <ModeToggleButton />
                </div>
            </nav>
        </header>
    );
};