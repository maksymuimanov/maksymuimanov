import {Marquee} from "@/components/ui/marquee.tsx";
import {
    ApachekafkaOriginalIcon, DockerPlainIcon, HibernatePlainIcon, JavaPlainIcon,
    KubernetesPlainIcon, MongodbPlainIcon, MysqlOriginalIcon, PostgresqlPlainIcon,
    RabbitmqOriginalIcon, ReactOriginalIcon, RedisPlainIcon, SpringOriginalIcon, TypescriptPlainIcon
} from "@devicon/react";

export const TechStackMarquee = ({reverse}: {reverse: boolean}) => {
    return (
        <div className="mt-10 mb-10">
            <Marquee pauseOnHover reverse={reverse}>
                <JavaPlainIcon size="100" color="var(--secondary)" />
                <SpringOriginalIcon size="100" color="var(--secondary)" />
                <HibernatePlainIcon size="100" color="var(--secondary)" />
                <PostgresqlPlainIcon size="100" color="var(--secondary)" />
                <MysqlOriginalIcon size="100" color="var(--secondary)" />
                <MongodbPlainIcon size="100" color="var(--secondary)" />
                <RedisPlainIcon size="100" color="var(--secondary)" />
                <ApachekafkaOriginalIcon size="100" color="var(--secondary)" />
                <RabbitmqOriginalIcon size="100" color="var(--secondary)" />
                <DockerPlainIcon size="100" color="var(--secondary)" />
                <KubernetesPlainIcon size="100" color="var(--secondary)" />
                <TypescriptPlainIcon size="100" color="var(--secondary)" />
                <ReactOriginalIcon size="100" color="var(--secondary)" />
            </Marquee>
        </div>
    );
};