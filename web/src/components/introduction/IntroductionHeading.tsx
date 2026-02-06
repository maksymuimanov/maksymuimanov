import TextPressure from "@/components/ui/TextPressure.tsx";

export const IntroductionHeading = () => {
    return (
        <div className="mt-[20%] grid justify-center text-center">
            <div className="text-7xl w-80 sm:w-90 md:w-125 lg:w-165 xl:w-200">
                <p>Hey! I'm </p>
                <TextPressure text="Maksym Uimanov"
                              textColor="var()"
                              minFontSize={110}
                              stroke={true}
                              strokeColor="var(--primary)"/>
            </div>
        </div>
    );
};