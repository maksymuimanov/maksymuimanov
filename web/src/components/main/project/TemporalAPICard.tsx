import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card.tsx";
import {HrefButton} from "@/components/button/HrefButton.tsx";
import {CardHrefContainer} from "@/components/main/project/CardHrefContainer.tsx";
import {BadgeContainer} from "@/components/main/project/BadgeContainer.tsx";
import {IconBadge} from "@/components/main/project/IconBadge.tsx";
import {GradleOriginalIcon, JavaOriginalIcon} from "@devicon/react";
import banner from "@/assets/temporalapi.png";

export const TemporalAPICard = () => {
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0 bg-linear-to-b from-background to-card">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
                src={banner}
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60 dark:brightness-40"
            />
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
            <CardContent>
                <BadgeContainer>
                    <IconBadge><JavaOriginalIcon size="20"/></IconBadge>
                    <IconBadge><GradleOriginalIcon color="#4a97b5" size="20"/></IconBadge>
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
        </Card>
    );
};