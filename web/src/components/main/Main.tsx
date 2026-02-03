import {Button} from "@/components/ui/button.tsx";
import {Marquee} from "@/components/ui/marquee.tsx";
import {
    Docker,
    Git,
    Java,
    Mongodb,
    MySql,
    Postgresql,
    ReactIcon,
    ShadcnUi,
    SpringBoot,
    Typescript
} from "@boxicons/react";
import cv from "@/../public/cv.pdf";
import GridPattern from "@/components/ui/grid-pattern.tsx";

export const Main = () => {
    return (
        <main className="h-full w-full font-mono">
            <div className="p-10">
                <div className="bg-background relative flex size-full items-center justify-center overflow-hidden rounded-lg border p-20">
                    <GridPattern
                        width={50}
                        height={50}
                        x={-1}
                        y={-1}
                        className="mask-[linear-gradient(to_bottom,white,transparent,transparent)]"
                    />

                    <div>
                        <div className=" grid justify-center text-center">
                            <div className="text-7xl w-150">
                                <span>Hey! My name is </span>
                                <span className="font-bold ">Maksym Uimanov</span>
                            </div>
                        </div>
                        <div className="mt-10 grid justify-center text-center">
                            <div className="text-2xl w-150 text-secondary-foreground">
                                <span>I am an aspiring and highly motivated </span>
                                <span className="italic font-semibold bg-secondary-foreground text-secondary">Fullstack Developer</span>
                                <span> with hands-on experience in </span>
                                <div className="inline bg-secondary-foreground text-secondary">
                                    <span className="italic font-semibold">Java</span>
                                    <span> and </span>
                                    <span className="italic font-semibold">React</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-15 text-center">
                            <Button className="cursor-pointer h-25 w-125 border-dashed rounded-xl border-3" variant="outline">
                                <a href={cv} download="cv.pdf" className="h-[6.0rem] w-[31.0rem] absolute"></a>
                                <span className="text-2xl italic text-secondary-foreground">DOWNLOAD CV</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-15">
                <Marquee >
                    <Java className="text-secondary" size="3xl" />
                    <SpringBoot className="text-secondary" size="3xl" />
                    <Postgresql className="text-secondary" size="3xl" />
                    <MySql className="text-secondary" size="3xl" />
                    <Mongodb className="text-secondary" size="3xl" />
                    <Typescript className="text-secondary" size="3xl" />
                    <ReactIcon className="text-secondary" size="3xl" />
                    <ShadcnUi className="text-secondary" size="3xl" />
                    <Docker className="text-secondary" size="3xl" />
                    <Git className="text-secondary" size="3xl" />
                </Marquee>
            </div>
        </main>
    );
};