import React from "react";
import { cn } from "~/lib/utils";

interface SubtitleProps {
    children: React.ReactNode;
    className?: string;
}
const Subtitle: React.FC<SubtitleProps> = ({ children, className }) => {
    return (
        <p
            className={cn(
                "text-center text-[14px]/[22px] lg:text-[24px]/[36px] text-body-text ",
                className
            )}
        >
            {children}
        </p>
    );
};

export default Subtitle;
