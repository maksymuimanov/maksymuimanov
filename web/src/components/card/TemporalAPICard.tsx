import {
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card.tsx";
import {HrefButton} from "@/components/button/HrefButton.tsx";
import {CardHrefContainer} from "@/components/card/CardHrefContainer.tsx";
import {BadgeContainer} from "@/components/card/BadgeContainer.tsx";
import banner from "@/assets/temporalapi.png";
import {ProjectCard} from "@/components/card/ProjectCard.tsx";
import {TextBadge} from "@/components/common/TextBadge.tsx";
import {useState} from "react";

export const TemporalAPICard = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <ProjectCard onHover={setHovered} banner={banner}>
            <CardHeader>
                <CardTitle>Temporal API</CardTitle>
                <CardDescription>
                    Temporal API is a Minecraft modding framework
                    with 11M+ downloads that focuses on making
                    the whole Minecraft mod development a lot
                    easier and faster by reducing boilerplate
                    code and providing new annotation-based procession
                    and event handling system
                </CardDescription>
            </CardHeader>
            <CardContent className={hovered ? "" : "grayscale-75"}>
                <BadgeContainer>
                    <TextBadge text="java" variant="orange" />
                    <TextBadge text="minecraft" variant="green" />
                    <TextBadge text="neoforge" variant="orange" />
                    <TextBadge text="forge" variant="gray" />
                    <TextBadge text="guava" variant="purple" />
                    <TextBadge text="apache commons" variant="red" />
                    <TextBadge text="gradle" variant="cyan" />
                </BadgeContainer>
            </CardContent>
            <CardFooter>
                <CardHrefContainer>
                    <HrefButton href="https://github.com/maksymuimanov/Temporal-API" buttonVariant="link" buttonClassName="w-full" aClassName="absolute w-[4.5rem] h-[1.8rem]">
                        <div>GitHub</div>
                    </HrefButton>
                    <HrefButton href="https://www.curseforge.com/minecraft/mc-mods/temporal-api" buttonVariant="link" buttonClassName="w-full" aClassName="absolute w-[4.5rem] h-[1.8rem]">
                        <div>CurseForge</div>
                    </HrefButton>
                    <HrefButton href="https://github.com/maksymuimanov/Temporal-API/wiki" buttonVariant="link" buttonClassName="w-full" aClassName="absolute w-[4.5rem] h-[1.8rem]">
                        <div>Wiki</div>
                    </HrefButton>
                </CardHrefContainer>
            </CardFooter>
        </ProjectCard>
    );
};