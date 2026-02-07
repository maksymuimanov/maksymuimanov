import {CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {HrefButton} from "@/components/button/HrefButton.tsx";
import {CardHrefContainer} from "@/components/card/CardHrefContainer.tsx";
import {BadgeContainer} from "@/components/card/BadgeContainer.tsx";
import banner from "@/assets/extracompat.png";
import {ProjectCard} from "@/components/card/ProjectCard.tsx";
import {TextBadge} from "@/components/common/TextBadge.tsx";
import {useState} from "react";

export const ExtraCompatCard = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <ProjectCard onHover={setHovered} banner={banner}>
            <CardHeader>
                <CardTitle>Extra Compat</CardTitle>
                <CardDescription>
                    Extra Compat is a Minecraft mod with 11M+ downloads.
                    The project focuses on making multiple Minecraft
                    mods compatible with each other without the headache.
                    Around 50% of the whole content were simply suggestions from
                    different players implemented by me
                </CardDescription>
            </CardHeader>
            <CardContent className={hovered ? "" : "grayscale-75"}>
                <BadgeContainer>
                    <TextBadge text="java" variant="orange" />
                    <TextBadge text="minecraft" variant="green" />
                    <TextBadge text="neoforge" variant="orange" />
                    <TextBadge text="forge" variant="gray" />
                    <TextBadge text="temporal api" variant="amber" />
                    <TextBadge text="gradle" variant="cyan" />
                </BadgeContainer>
            </CardContent>
            <CardFooter>
                <CardHrefContainer>
                    <HrefButton href="https://github.com/CyberRat7/Extra_Compat" buttonVariant="link" buttonClassName="w-full" aClassName="absolute w-[4.5rem] h-[1.8rem]">
                        <div>GitHub</div>
                    </HrefButton>
                    <HrefButton href="https://www.curseforge.com/minecraft/mc-mods/extra-compat" buttonVariant="link" buttonClassName="w-full" aClassName="absolute w-[4.5rem] h-[1.8rem]">
                        <div>CurseForge</div>
                    </HrefButton>
                </CardHrefContainer>
            </CardFooter>
        </ProjectCard>
    );
};