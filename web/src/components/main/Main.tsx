import {TechStackMarqueeContainer} from "@/components/main/stack/TechStackMarqueeContainer.tsx";
import {IntroductionContainer} from "@/components/main/introduction/IntroductionContainer.tsx";
import {TextHr} from "@/components/main/TextHr.tsx";
import {ProjectCardContainer} from "@/components/main/project/ProjectCardContainer.tsx";

export const Main = () => {
    return (
        <main className="h-full w-full font-mono">
            <IntroductionContainer/>
            <TechStackMarqueeContainer/>
            <TextHr text="Projects" />
            <ProjectCardContainer />
        </main>
    );
};