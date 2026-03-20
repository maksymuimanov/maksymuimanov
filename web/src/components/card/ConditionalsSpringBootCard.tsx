import {CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {HrefButton} from "@/components/button/HrefButton.tsx";
import {CardHrefContainer} from "@/components/card/CardHrefContainer.tsx";
import {BadgeContainer} from "@/components/card/BadgeContainer.tsx";
import banner from "@/assets/conditionalsspringboot.png";
import {ProjectCard} from "@/components/card/ProjectCard.tsx";
import {TextBadge} from "@/components/common/TextBadge.tsx";
import {useState} from "react";

export const ConditionalsSpringBootCard = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <ProjectCard onHover={setHovered} banner={banner}>
            <CardHeader>
                <CardTitle>Conditionals Spring Boot</CardTitle>
                <CardDescription>
                    Conditionals Spring Boot is an open-source
                    library that adds more @Conditional annotations
                    to the Spring Boot framework. It provides a bunch
                    of strict type-checking conditions and some other
                    useful conditions (e.g. @ConditionalOnOs, @ConditionalOnPortAvailable)
                </CardDescription>
            </CardHeader>
            <CardContent className={hovered ? "" : "grayscale-75"}>
                <BadgeContainer>
                    <TextBadge text="java" variant="orange" />
                    <TextBadge text="spring boot" variant="green" />
                    <TextBadge text="maven" variant="purple" />
                </BadgeContainer>
            </CardContent>
            <CardFooter>
                <CardHrefContainer>
                    <HrefButton href="https://github.com/maksymuimanov/conditionals-spring-boot" buttonVariant="link" buttonClassName="w-full" aClassName="absolute w-[4.5rem] h-[1.8rem]">
                        <div>GitHub</div>
                    </HrefButton>
                    <HrefButton href="https://central.sonatype.com/artifact/io.github.maksymuimanov/conditionals-spring-boot" buttonVariant="link" buttonClassName="w-full" aClassName="absolute w-[4.5rem] h-[1.8rem]">
                        <div>Maven Cental</div>
                    </HrefButton>
                </CardHrefContainer>
            </CardFooter>
        </ProjectCard>
    );
};