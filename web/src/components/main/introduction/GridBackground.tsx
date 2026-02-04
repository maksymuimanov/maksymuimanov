import GridPattern from "@/components/ui/grid-pattern.tsx";

export const GridBackground = () => {
    return (
        <GridPattern
            width={50}
            height={50}
            x={-1}
            y={-1}
            className="mask-[linear-gradient(to_bottom,white,transparent,transparent)]"
        />
    );
};