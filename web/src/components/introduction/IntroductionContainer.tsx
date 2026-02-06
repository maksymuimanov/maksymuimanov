import {IntroductionHeading} from "@/components/introduction/IntroductionHeading.tsx";
import {IntroductionSummary} from "@/components/introduction/IntroductionSummary.tsx";
import {DownloadCVButton} from "@/components/button/DownloadCVButton.tsx";
import {GridBackground} from "@/components/background/GridBackground.tsx";

export const IntroductionContainer = () => {
    return (
        <div className="bg-background relative flex size-full items-center justify-center overflow-hidden p-20">
            <GridBackground />
            <div>
                <IntroductionHeading />
                <IntroductionSummary />
                <DownloadCVButton />
            </div>
        </div>
    );
};