import {motion} from "motion/react";
import React, {type ReactElement, useState} from "react";
import {Card} from "@/components/ui/card.tsx";

export const ProjectCard = ({children, banner, onHover}: {children: ReactElement[] | ReactElement, banner: string, onHover: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [hovered, setHovered] = useState(false);
    onHover(hovered);

    return (
        <motion.div initial={{ opacity: 0 }}
                    transition={{ease: "easeIn", duration: 0.4 }}
                    whileInView={{ opacity: 1 }}>
            <motion.div
                transition={{ ease: "easeInOut", duration: 0.15 }}
                onHoverStart={() => setHovered(true)}
                whileHover={{ scale: 1.05 }}
                onHoverEnd={() => setHovered(false)}>
                <Card className="relative mx-auto w-full max-w-sm pt-0 bg-linear-to-b from-background to-card">
                    <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                    <img
                        src={banner}
                        alt="Event cover"
                        className={"relative z-20 aspect-video w-full object-cover" + (hovered ? " brightness-100 dark:brightness-80" : " grayscale-75 brightness-75 dark:brightness-40")}
                    />
                    {children}
                </Card>
            </motion.div>
        </motion.div>
    );
};