import cv from "@/assets/cv.pdf";
import {HrefButton} from "@/components/button/HrefButton.tsx";

export const DownloadCVButton = () => {
    return (
        <div className="mt-15 text-center">
            <HrefButton href={cv} aClassName="h-[6.0rem] w-[31.0rem] absolute" buttonClassName="cursor-pointer h-25 w-75 md:w-90 lg:w-110 rounded border-2" buttonVariant="outline">
                <span className="text-2xl italic text-secondary-foreground">CHECK CV</span>
            </HrefButton>
        </div>
    );
};