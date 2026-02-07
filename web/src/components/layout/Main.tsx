import {IntroductionContainer} from "@/components/introduction/IntroductionContainer.tsx";
import {ProjectCardContainer} from "@/components/card/ProjectCardContainer.tsx";

export const Main = () => {
    return (
        <main className="h-full w-full font-mono">
            <IntroductionContainer/>
            <ProjectCardContainer />
        </main>
    );
};