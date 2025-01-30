interface Button {
    text: string;
    width?: string;
    height?: string;
    margin?: string;
    fontSize?: string;
    outlined?: boolean;
    onClick?: () => void;
}

export default function Button({ 
    text,
    width = 'max-w-80',
    height = 'h-12',
    margin = "p-0",
    fontSize = 'text-xl',
    outlined = false,
    onClick,
}: Button) {
    const buttonClass = `rounded-[10px] ${width} ${height} ${fontSize} ${margin}
        ${outlined ?
            'border border-primary hover:bg-primary hover:text-secondary'
            : 
            'bg-primary text-secondary'
        }`;

    return (
        <button className={buttonClass} onClick={onClick}>
            {text}
        </button>
    );
}