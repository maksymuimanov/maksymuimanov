import {Button} from "@/components/ui/button.tsx";
import cv from "@/assets/cv.pdf";

export const DownloadCVButton = () => {
    return (
        <div className="mt-15 text-center">
            <Button className="cursor-pointer h-25 w-75 md:w-90 lg:w-110 rounded border-2" variant="outline">
                <a href={cv} download="cv.pdf" className="h-[6.0rem] w-[31.0rem] absolute" />
                <span className="text-2xl italic text-secondary-foreground">DOWNLOAD CV</span>
            </Button>
        </div>
    );
};