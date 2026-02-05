import {Marquee} from "@/components/ui/marquee.tsx";
import {
    ApachekafkaOriginalIcon, DockerPlainIcon, HibernatePlainIcon, JavaPlainIcon,
    KubernetesPlainIcon, MongodbPlainIcon, MysqlOriginalIcon, PostgresqlPlainIcon,
    RabbitmqOriginalIcon, ReactOriginalIcon, RedisPlainIcon, SpringOriginalIcon, TypescriptPlainIcon
} from "@devicon/react";

export const TechStackMarquee = () => {
    return (
        <Marquee>
            <JavaPlainIcon size="120" color="var(--secondary)" />
            <SpringOriginalIcon size="120" color="var(--secondary)" />
            <HibernatePlainIcon size="120" color="var(--secondary)" />
            <PostgresqlPlainIcon size="120" color="var(--secondary)" />
            <MysqlOriginalIcon size="120" color="var(--secondary)" />
            <MongodbPlainIcon size="120" color="var(--secondary)" />
            <RedisPlainIcon size="120" color="var(--secondary)" />
            <ApachekafkaOriginalIcon size="120" color="var(--secondary)" />
            <RabbitmqOriginalIcon size="120" color="var(--secondary)" />
            <DockerPlainIcon size="120" color="var(--secondary)" />
            <KubernetesPlainIcon size="120" color="var(--secondary)" />
            <TypescriptPlainIcon size="120" color="var(--secondary)" />
            <ReactOriginalIcon size="120" color="var(--secondary)" />
        </Marquee>
    );
};