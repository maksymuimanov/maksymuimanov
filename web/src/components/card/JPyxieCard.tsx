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
import banner from "@/assets/jpyxie.svg";
import {ProjectCard} from "@/components/card/ProjectCard.tsx";
import {TextBadge} from "@/components/common/TextBadge.tsx";
import {useState} from "react";

export const JPyxieCard = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <ProjectCard onHover={setHovered} banner={banner}>
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
            <CardContent className={hovered ? "" : "grayscale-75"}>
                <BadgeContainer>
                    <TextBadge text="java" variant="orange" />
                    <TextBadge text="spring boot" variant="green" />
                    <TextBadge text="jackson" variant="amber" />
                    <TextBadge text="graalvm" variant="purple" />
                    <TextBadge text="graalpy" variant="blue" />
                    <TextBadge text="jep" variant="cyan" />
                    <TextBadge text="jython" variant="orange" />
                    <TextBadge text="python" variant="yellow" />
                    <TextBadge text="fastapi" variant="cyan" />
                    <TextBadge text="grpcio" variant="emerald" />
                    <TextBadge text="docker" variant="blue" />
                    <TextBadge text="maven" variant="purple" />
                    <TextBadge text="junit" variant="red" />
                    <TextBadge text="mockito" variant="green" />
                    <TextBadge text="testcontainers" variant="green" />
                    <TextBadge text="rest" variant="gray" />
                    <TextBadge text="grpc" variant="gray" />
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
        </ProjectCard>
    );
};