import {IntroductionHeading} from "@/components/main/introduction/IntroductionHeading.tsx";
import {IntroductionSummary} from "@/components/main/introduction/IntroductionSummary.tsx";
import {DownloadCVButton} from "@/components/button/DownloadCVButton.tsx";
import {GridBackground} from "@/components/main/introduction/GridBackground.tsx";

export const IntroductionContainer = () => {
    return (
        <div className="bg-background relative flex size-full items-center justify-center overflow-hidden border-b p-20">
            <GridBackground />
            <div>
                <IntroductionHeading />
                <IntroductionSummary />
                <DownloadCVButton />
            </div>
        </div>
    );
};