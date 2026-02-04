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

export const TechStackMarquee = () => {
    return (
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
    );
};