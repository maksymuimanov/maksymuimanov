import {TechStackMarqueeContainer} from "@/components/main/TechStackMarqueeContainer.tsx";
import {IntroductionContainer} from "@/components/main/IntroductionContainer.tsx";

export const Main = () => {
    return (
        <main className="h-full w-full font-mono">
            <IntroductionContainer />
            <TechStackMarqueeContainer />
        </main>
    );
};