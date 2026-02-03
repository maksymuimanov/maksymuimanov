import {Button} from "@/components/ui/button.tsx";
import cv from "@/../public/cv.pdf";

export const DownloadButton = () => {
    return (
        <Button className="cursor-pointer h-25 w-95 md:w-110 lg:w-125 border-dashed rounded-xl border-3" variant="outline">
            <a href={cv} download="cv.pdf" className="h-[6.0rem] w-[31.0rem] absolute"></a>
            <span className="text-2xl italic text-secondary-foreground">DOWNLOAD CV</span>
        </Button>
    );
};