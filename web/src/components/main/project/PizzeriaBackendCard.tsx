import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {HrefButton} from "@/components/button/HrefButton.tsx";
import {CardHrefContainer} from "@/components/main/project/CardHrefContainer.tsx";
import {BadgeContainer} from "@/components/main/project/BadgeContainer.tsx";
import {IconBadge} from "@/components/main/project/IconBadge.tsx";
import {
    ApachekafkaOriginalIcon, DockerOriginalIcon, ElasticsearchOriginalIcon, GrafanaOriginalIcon,
    HibernateOriginalIcon,
    JavaOriginalIcon, JunitOriginalIcon,
    KibanaOriginalIcon, KubernetesOriginalIcon, LogstashOriginalIcon, MavenOriginalIcon,
    MysqlOriginalIcon, PrometheusOriginalIcon, RedisOriginalIcon,
    SpringOriginalIcon
} from "@devicon/react";
import banner from "@/assets/pizzeriabackend.png";

export const PizzeriaBackendCard = () => {
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0 bg-linear-to-b from-background to-card">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
                src={banner}
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60 dark:brightness-40"
            />
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
                    <IconBadge><LogstashOriginalIcon size="20" /></IconBadge>
                    <IconBadge><KibanaOriginalIcon size="20" /></IconBadge>
                    <IconBadge><PrometheusOriginalIcon size="20" /></IconBadge>
                    <IconBadge><GrafanaOriginalIcon size="20" /></IconBadge>
                    <IconBadge><DockerOriginalIcon size="20" /></IconBadge>
                    <IconBadge><KubernetesOriginalIcon size="20" /></IconBadge>
                    <IconBadge><MavenOriginalIcon size="20" /></IconBadge>
                    <IconBadge><JunitOriginalIcon size="20" /></IconBadge>
                </BadgeContainer>
            </CardContent>
            <CardFooter>
                <CardHrefContainer>
                    <HrefButton href="https://github.com/maksymuimanov/sonnettopizza" buttonVariant="link" buttonClassName="w-full" aClassName="absolute w-[4.5rem] h-[1.8rem]">
                        <div>GitHub</div>
                    </HrefButton>
                </CardHrefContainer>
            </CardFooter>
        </Card>
    );
};