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
import {
    DockerOriginalIcon,
    FastapiOriginalIcon,
    GrpcOriginalIcon,
    JavaOriginalIcon,
    JunitOriginalIcon,
    MavenOriginalIcon, PythonOriginalIcon,
    SpringOriginalIcon
} from "@devicon/react";
import banner from "@/assets/jpyxie.svg";

export const JPyxieCard = () => {
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0 bg-linear-to-b from-background to-card">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
                src={banner}
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60 dark:brightness-40"
            />
            <CardHeader>
                <CardTitle>JPyxie</CardTitle>
                <CardDescription>
                    JPyxie is an open-source library for allowing
                    executing Python scripts seamlessly inside the
                    Java code. The project provides multiple execution options
                    (GraalVM, JEP, Jython, Process API or via REST/gRPC) and
                    clean Python script procession flow
                </CardDescription>
            </CardHeader>
            <CardContent>
                <BadgeContainer>
                    <IconBadge><JavaOriginalIcon size="20"/></IconBadge>
                    <IconBadge><SpringOriginalIcon size="20"/></IconBadge>
                    <IconBadge><GrpcOriginalIcon size="20"/></IconBadge>
                    <IconBadge><PythonOriginalIcon size="20"/></IconBadge>
                    <IconBadge><FastapiOriginalIcon size="20"/></IconBadge>
                    <IconBadge><DockerOriginalIcon size="20"/></IconBadge>
                    <IconBadge><MavenOriginalIcon size="20"/></IconBadge>
                    <IconBadge><JunitOriginalIcon size="20" /></IconBadge>
                </BadgeContainer>
            </CardContent>
            <CardFooter>
                <CardHrefContainer>
                    <HrefButton href="https://github.com/maksymuimanov/jpyxie" buttonVariant="link" buttonClassName="w-full" aClassName="absolute w-[4.5rem] h-[1.8rem]">
                        <div>GitHub</div>
                    </HrefButton>
                    <HrefButton href="https://central.sonatype.com/artifact/io.github.w4t3rcs/spring-boot-python-executor-starter" buttonVariant="link" buttonClassName="w-full" aClassName="absolute w-[4.5rem] h-[1.8rem]">
                        <div>Maven Cental</div>
                    </HrefButton>
                </CardHrefContainer>
            </CardFooter>
        </Card>
    );
};