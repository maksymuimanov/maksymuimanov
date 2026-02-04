export const HighlightedText = ({text}: {text: string}) => {
    return (
        <span className="italic font-semibold bg-secondary-foreground text-secondary">
            {text}
        </span>
    );
};