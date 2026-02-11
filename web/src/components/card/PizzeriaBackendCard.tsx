import {CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {HrefButton} from "@/components/button/HrefButton.tsx";
import {CardHrefContainer} from "@/components/card/CardHrefContainer.tsx";
import {BadgeContainer} from "@/components/card/BadgeContainer.tsx";
import banner from "@/assets/pizzeriabackend.png";
import {ProjectCard} from "@/components/card/ProjectCard.tsx";
import {TextBadge} from "@/components/common/TextBadge.tsx";
import {useState} from "react";

export const PizzeriaBackendCard = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <ProjectCard onHover={setHovered} banner={banner}>
            <CardHeader>
                <CardTitle>Pizzeria App Backend</CardTitle>
                <CardDescription>
                    This is a pet-project which is based on microservices
                    architecture and contains several microservices, API Gateway,
                    discovery server, config server, observability and much more.
                    It's mostly a project to showcase my skills and knowledge at building REST APIs
                </CardDescription>
            </CardHeader>
            <CardContent className={hovered ? "" : "grayscale-75"}>
                <BadgeContainer>
                    <TextBadge text="java" variant="orange" />
                    <TextBadge text="spring boot" variant="green" />
                    <TextBadge text="hibernate" variant="yellow" />
                    <TextBadge text="mysql" variant="cyan" />
                    <TextBadge text="mongodb" variant="green" />
                    <TextBadge text="redis" variant="red" />
                    <TextBadge text="apache kafka" variant="gray" />
                    <TextBadge text="ollama" variant="gray" />
                    <TextBadge text="swagger" variant="emerald" />
                    <TextBadge text="keycloak" variant="cyan" />
                    <TextBadge text="junit" variant="red" />
                    <TextBadge text="docker" variant="blue" />
                    <TextBadge text="k8s" variant="blue" />
                    <TextBadge text="maven" variant="purple" />
                    <TextBadge text="rest" variant="gray" />
                    <TextBadge text="microservices" variant="gray" />
                </BadgeContainer>
            </CardContent>
            <CardFooter>
                <CardHrefContainer>
                    <HrefButton href="https://github.com/maksymuimanov/sonnettopizza" buttonVariant="link" buttonClassName="w-full" aClassName="absolute w-[4.5rem] h-[1.8rem]">
                        <div>GitHub</div>
                    </HrefButton>
                </CardHrefContainer>
            </CardFooter>
        </ProjectCard>
    );
};