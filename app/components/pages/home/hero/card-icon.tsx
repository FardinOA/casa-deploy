import { cn } from "~/lib/utils";

interface CardIconProps {
    children: React.ReactNode;
    className?: string;
}

const CardIcon: React.FC<CardIconProps> = ({ children, className }) => {
    return (
        <p
            className={cn(
                "bg-light-green-4 size-6 lg:size-10 rounded-full inline-flex justify-center items-center aspect-square ",
                className
            )}
        >
            {children}
        </p>
    );
};

export default CardIcon;
