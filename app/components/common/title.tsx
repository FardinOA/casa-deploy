import { cn } from "~/lib/utils";

interface TitleProps {
    children: React.ReactNode;
    as?: keyof JSX.IntrinsicElements;
    className?: string;
}

const Title: React.FC<TitleProps> = ({
    children,
    as: Component = "p",
    className,
}) => {
    return (
        <Component
            className={cn(
                "font-bold text-[28px]/[40px] lg:font-extrabold lg:text-[56px]/[68px] ",
                className
            )}
        >
            {children}
        </Component>
    );
};

export default Title;
