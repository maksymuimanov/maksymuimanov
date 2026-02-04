import {Button} from "@/components/ui/button.tsx";
import cv from "@/assets/cv.pdf";

export const DownloadCVButton = () => {
    return (
        <div className="mt-15 text-center">
            <Button className="cursor-pointer h-25 w-95 md:w-110 lg:w-125 border-dashed rounded-xl border-3" variant="outline">
                <a href={cv} download="cv.pdf" className="h-[6.0rem] w-[31.0rem] absolute" />
                <span className="text-2xl italic text-secondary-foreground">DOWNLOAD CV</span>
            </Button>
        </div>
    );
};