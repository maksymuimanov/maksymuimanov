import {TechStackMarqueeContainer} from "@/components/main/stack/TechStackMarqueeContainer.tsx";
import {IntroductionContainer} from "@/components/main/introduction/IntroductionContainer.tsx";

export const Main = () => {
    return (
        <main className="h-full w-full font-mono">
            <IntroductionContainer />
            <TechStackMarqueeContainer />
        </main>
    );
};