"use client";
import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselApi,
} from "~/components/ui/carousel";
import ReviewCard from "./review-card";
import { cn } from "~/lib/utils";

interface ReviewCarouselProps {
    data: {
        rating: number;
        logo: string;
        title: string;
        subtitle: string;
        user: {
            image: string;
            name: string;
            designation: string;
        };
    }[];
}

const ReviewCarousel: React.FC<ReviewCarouselProps> = ({ data }) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            setApi={setApi}
        >
            <CarouselContent className="-ml-9">
                {data?.map((ele, ind) => (
                    <CarouselItem
                        className="lg:basis-1/2 lg:pl-9"
                        key={ind + 1}
                    >
                        <ReviewCard data={ele} />
                    </CarouselItem>
                ))}
            </CarouselContent>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-[52px] lg:mt-[130px] ">
                {Array.from({ length: count }).map((_, index) => (
                    <button
                        key={index}
                        tabIndex={0}
                        className={cn(
                            ` size-2 md:size-3 lg:size-6 aspect-square rounded-full bg-light-green-1  transition-all duration-500 `,
                            index + 1 == current && "bg-primary "
                        )}
                        onClick={() => api && api.scrollTo(index)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                api && api.scrollTo(index);
                            }
                        }}
                    ></button>
                ))}
            </div>
        </Carousel>
    );
};

export default ReviewCarousel;
