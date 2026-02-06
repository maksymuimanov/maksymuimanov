import {CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {HrefButton} from "@/components/button/HrefButton.tsx";
import {CardHrefContainer} from "@/components/project/CardHrefContainer.tsx";
import {BadgeContainer} from "@/components/project/BadgeContainer.tsx";
import {IconBadge} from "@/components/project/IconBadge.tsx";
import {
    ApachekafkaOriginalIcon,
    DockerOriginalIcon,
    ElasticsearchOriginalIcon,
    HibernateOriginalIcon,
    JavaOriginalIcon,
    KubernetesOriginalIcon,
    MavenOriginalIcon,
    MysqlOriginalIcon,
    RedisOriginalIcon,
    SpringOriginalIcon
} from "@devicon/react";
import banner from "@/assets/pizzeriabackend.png";
import {ProjectCard} from "@/components/card/ProjectCard.tsx";

export const PizzeriaBackendCard = () => {
    return (
        <ProjectCard banner={banner}>
            <CardHeader>
                <CardTitle>Pizzeria App Backend</CardTitle>
                <CardDescription>
                    This is a pet-project which is based on microservices
                    architecture and contains several microservices, API Gateway,
                    discovery server, config server, observability and much more.
                    It's mostly a project to showcase my skills and knowledge at building REST APIs
                </CardDescription>
            </CardHeader>
            <CardContent>
                <BadgeContainer>
                    <IconBadge><JavaOriginalIcon size="20"/></IconBadge>
                    <IconBadge><SpringOriginalIcon size="20" /></IconBadge>
                    <IconBadge><HibernateOriginalIcon size="20" /></IconBadge>
                    <IconBadge><MysqlOriginalIcon size="20" /></IconBadge>
                    <IconBadge><RedisOriginalIcon size="20" /></IconBadge>
                    <IconBadge><ApachekafkaOriginalIcon color="gray" size="20" /></IconBadge>
                    <IconBadge><ElasticsearchOriginalIcon size="20" /></IconBadge>
                    <IconBadge><DockerOriginalIcon size="20" /></IconBadge>
                    <IconBadge><KubernetesOriginalIcon size="20" /></IconBadge>
                    <IconBadge><MavenOriginalIcon size="20" /></IconBadge>
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