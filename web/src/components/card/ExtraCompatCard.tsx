import {CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {HrefButton} from "@/components/button/HrefButton.tsx";
import {CardHrefContainer} from "@/components/project/CardHrefContainer.tsx";
import {IconBadge} from "@/components/project/IconBadge.tsx";
import {
    GradleOriginalIcon,
    JavaOriginalIcon
} from "@devicon/react";
import {BadgeContainer} from "@/components/project/BadgeContainer.tsx";
import banner from "@/assets/extracompat.png";
import {ProjectCard} from "@/components/card/ProjectCard.tsx";

export const ExtraCompatCard = () => {
    return (
        <ProjectCard banner={banner}>
            <CardHeader>
                <CardTitle>Extra Compat</CardTitle>
                <CardDescription>
                    Extra Compat is a Minecraft mod with 11M+ downloads.
                    The project focuses on making multiple Minecraft
                    mods compatible with each other without the headache
                    for players. Around 50% of content were implementations
                    of suggestions made by several players
                </CardDescription>
            </CardHeader>
            <CardContent>
                <BadgeContainer>
                    <IconBadge><JavaOriginalIcon size="20"/></IconBadge>
                    <IconBadge><GradleOriginalIcon color="#4a97b5" size="20"/></IconBadge>
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