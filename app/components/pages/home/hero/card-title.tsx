import { cn } from "~/lib/utils";

interface CardTitleProps {
    children: React.ReactNode;
    className?: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => {
    return (
        <p
            className={cn(
                "font-semibold text-[18px]/[24px] lg:text-[32px]/[40px] ",
                className
            )}
        >
            {children}
        </p>
    );
};

export default CardTitle;
