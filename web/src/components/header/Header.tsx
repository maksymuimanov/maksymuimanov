import {Navbar} from "@/components/header/Navbar.tsx";


export const Header = () => {
    return (
        <header className="flex h-15 gap-2 border-b sticky top-0 z-50 backdrop-blur-sm">
            <Navbar />
        </header>
    );
};