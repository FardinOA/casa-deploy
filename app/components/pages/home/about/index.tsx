import Title from "~/components/common/title";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const About = () => {
    const cardData = [
        {
            title: "Secure and Instant Cash Advances",
            description:
                "No more waiting weeks—convert daily credit card transactions into cash within 24 hours to keep your business running smoothly.",
            icon: "cash-banknote.png",
        },
        {
            title: "Transparent and Fair Pricing Process",
            description:
                "No Hidden Fees, No Surprises. Enjoy clear, upfront pricing with flexible funding options, so you always know what to expect.",
            icon: "cash.png",
        },
        {
            title: "Flexible and Secure Payout Options",
            description:
                "We offer flexible and easy payout options tailored to your needs, ensuring quick access to your funds. Choose from multiple payment methods.",
            icon: "cards.png",
        },
    ];

    return (
        <section className="container py-[56px] lg:py-[136px] space-y-[52px] lg:space-y-[133px] ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[52px] lg:gap-[100px] ">
                <div className="space-y-6 lg:space-y-10">
                    <Badge>About Casa Service</Badge>
                    <Title as="h2">
                        Revolutionizing Cash Flow for Business Owners!
                    </Title>
                </div>
                <div className="space-y-6 lg:space-y-8 ">
                    <p className="text-sm text-body-text lg:text-2xl lg:leading-9   ">
                        Empowering businesses with faster cash access, CASA
                        provides a secure, fast, and flexible solution to get
                        early payments for credit card sales.
                    </p>
                    <Button>Join now</Button>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-9 ">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className={`py-9 px-8 space-y-4 lg:space-y-6 rounded-2xl group bg-gray-1 transition-all duration-300 hover:bg-primary  `}
                    >
                        <h3
                            className={cn(
                                "font-bold text-[20px]/[28px] lg:text-[32px]/[40px] text-body-text group-hover:text-white transition-all duration-300 "
                            )}
                        >
                            {card?.title}
                        </h3>
                        <figure
                            className={cn(
                                " size-[36px] lg:size-[56px] rounded-full aspect-square bg-light-green-2 flex items-center justify-center  "
                            )}
                        >
                            <img
                                src={`/images/icons/${card?.icon}`}
                                alt={card?.title}
                                className="w-6 h-6 lg:w-10 lg:h-10"
                            />
                        </figure>

                        <p
                            className={cn(
                                " text-sm  lg:text-[20px]/[24px] text-body-text group-hover:text-white transition-all duration-300"
                            )}
                        >
                            {card?.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
