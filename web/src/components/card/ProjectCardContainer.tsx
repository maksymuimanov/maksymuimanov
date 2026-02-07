import {JPyxieCard} from "@/components/card/JPyxieCard.tsx";
import {TemporalAPICard} from "@/components/card/TemporalAPICard.tsx";
import {ExtraCompatCard} from "@/components/card/ExtraCompatCard.tsx";
import {PizzeriaBackendCard} from "@/components/card/PizzeriaBackendCard.tsx";
import {TextHr} from "@/components/common/TextHr.tsx";
import {motion} from "motion/react";
import {TechStackMarquee} from "@/components/marquee/TechStackMarquee.tsx";

export const ProjectCardContainer = () => {
    return (
        <motion.div initial={{ opacity: 0 }}
                    transition={{ease: "easeIn", duration: 0.25 }}
                    whileInView={{ opacity: 1 }}>
            <TextHr text="Projects" />
            <TechStackMarquee reverse={false} />
            <div className="m-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-20">
                <JPyxieCard />
                <TemporalAPICard />
                <ExtraCompatCard />
                <PizzeriaBackendCard />
            </div>
            <TechStackMarquee reverse={true} />
        </motion.div>
    );
};