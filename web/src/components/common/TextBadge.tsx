import {Badge} from "@/components/ui/badge.tsx";

type TextBadgeProps = {
    className?: string,
    text: string,
    variant: "red" | "green" | "emerald" | "blue" | "cyan" | "yellow" | "orange" | "amber" | "pink" | "purple" | "gray"
};

const variantMap = new Map();
variantMap.set("red", "border-red-600 bg-red-200 text-red-600 dark:border-red-700 dark:bg-red-300 dark:text-red-700");
variantMap.set("green", "border-green-600 bg-green-200 text-green-600 dark:border-green-700 dark:bg-green-300 dark:text-green-700");
variantMap.set("emerald", "border-emerald-600 bg-emerald-200 text-emerald-600 dark:border-emerald-700 dark:bg-emerald-300 dark:text-emerald-700");
variantMap.set("blue", "border-blue-600 bg-blue-200 text-blue-600 dark:border-blue-700 dark:bg-blue-300 dark:text-blue-700");
variantMap.set("cyan", "border-cyan-600 bg-cyan-200 text-cyan-600 dark:border-cyan-700 dark:bg-cyan-300 dark:text-cyan-700");
variantMap.set("yellow", "border-yellow-600 bg-yellow-200 text-yellow-600 dark:border-yellow-700 dark:bg-yellow-300 dark:text-yellow-700");
variantMap.set("orange", "border-orange-600 bg-orange-200 text-orange-600 dark:border-orange-700 dark:bg-orange-300 dark:text-orange-700");
variantMap.set("amber", "border-amber-600 bg-amber-200 text-amber-600 dark:border-amber-700 dark:bg-amber-300 dark:text-amber-700");
variantMap.set("pink", "border-pink-600 bg-pink-200 text-pink-600 dark:border-pink-700 dark:bg-pink-300 dark:text-pink-700");
variantMap.set("purple", "border-purple-600 bg-purple-200 text-purple-600 dark:border-purple-700 dark:bg-purple-300 dark:text-purple-700");
variantMap.set("gray", "border-gray-600 bg-gray-200 text-gray-600 dark:border-gray-700 dark:bg-gray-300 dark:text-gray-700");


export const TextBadge = ({className, text, variant}: TextBadgeProps) => {
    return (
        <Badge className={"mr-1.5 mb-1 rounded-md opacity-85 dark:opacity-75 " + variantMap.get(variant) + " " + (className == undefined ? "" : className)}>
            <span>{text}</span>
        </Badge>
    );
};