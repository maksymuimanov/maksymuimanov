import {Button} from "@/components/ui/button.tsx";
import {CheckIcon, CopyIcon} from "lucide-react";
import {useState} from "react";

export const CopyButton = ({content}: {content: string}) => {
    const [copied, setCopied] = useState(false);

    return (
        <Button className="mt-2 h-8 w-full" onClick={() => {
            navigator.clipboard.writeText(content).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1000);
            });
        }}>{
            copied ? <CheckIcon/> : <><CopyIcon/> <span className="font-mono">Copy</span></>
        }</Button>
    );
};