export const TextHr = ({text}: {text: string}) => {
    return (
        <div className="relative flex items-center">
            <div className="grow border-t border-border"></div>
            <span className="shrink mx-4 text-lg text-border">{text}</span>
            <div className="grow border-t border-border"></div>
        </div>
    );
};