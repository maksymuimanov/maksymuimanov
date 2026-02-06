import {TechStackMarqueeContainer} from "@/components/stack/TechStackMarqueeContainer.tsx";
import {IntroductionContainer} from "@/components/introduction/IntroductionContainer.tsx";
import {ProjectCardContainer} from "@/components/project/ProjectCardContainer.tsx";

export const Main = () => {
    return (
        <main className="h-full w-full font-mono">
            <IntroductionContainer/>
            <TechStackMarqueeContainer/>
            <ProjectCardContainer />
        </main>
    );
};