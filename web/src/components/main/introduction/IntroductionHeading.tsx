import TextPressure from "@/components/ui/TextPressure.tsx";

export const IntroductionHeading = () => {
    return (
        <div className="mt-15 grid justify-center text-center">
            <div className="text-7xl w-75 md:w-125 lg:w-165 xl:w-200">
                <p>Hey! I'm </p>
                <TextPressure text="Maksym Uimanov"
                              textColor="var()"
                              minFontSize={80}
                              stroke={true}
                              strokeColor="var(--primary)"/>
            </div>
        </div>
    );
};