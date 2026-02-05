import {JPyxieCard} from "@/components/main/project/JPyxieCard.tsx";
import {TemporalAPICard} from "@/components/main/project/TemporalAPICard.tsx";
import {ExtraCompatCard} from "@/components/main/project/ExtraCompatCard.tsx";
import {PizzeriaBackendCard} from "@/components/main/project/PizzeriaBackendCard.tsx";

export const ProjectCardContainer = () => {
    return (
        <div className="m-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-20">
            <JPyxieCard />
            <TemporalAPICard />
            <ExtraCompatCard />
            <PizzeriaBackendCard />
        </div>
    );
};