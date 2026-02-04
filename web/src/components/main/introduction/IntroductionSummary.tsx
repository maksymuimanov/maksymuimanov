import {HighlightedText} from "@/components/main/introduction/HighlightedText.tsx";

export const IntroductionSummary = () => {
    return (
        <div className="mt-10 grid justify-center text-center">
            <div className="text-2xl w-75 md:w-125 lg:w-150 text-secondary-foreground">
                <span>I am an aspiring and highly motivated </span>
                <HighlightedText text="Fullstack Developer" />
                <span> from Poland with hands-on experience in </span>
                <HighlightedText text="Java and React" />
            </div>
        </div>
    );
};