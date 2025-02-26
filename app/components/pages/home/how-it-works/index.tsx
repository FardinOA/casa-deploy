import Subtitle from "~/components/common/subtitle";
import Title from "~/components/common/title";
import { Badge } from "~/components/ui/badge";
import Card from "./card";

const HowItWorks = () => {
    const data = [
        {
            image: "/images/sign-up-card.png",
            content: {
                title: "Connect Your Business",
                subtitle:
                    "Sign up and link your credit card processor or POS system with CASA. We support all major payment providers.",
                list: [
                    {
                        data: "Fast approval & easy integration",
                    },
                    {
                        data: "No impact on your credit score",
                    },
                ],
            },
        },
        {
            image: "/images/transaction.png",
            content: {
                title: "Transactions for Early Payment",
                subtitle:
                    "Every morning, your previous day’s credit card transactions are automatically submitted for funding.",
                list: [
                    {
                        data: " No waiting for 30-60 day settlements",
                    },
                    {
                        data: "Transparent discount rates",
                    },
                ],
            },
        },
        {
            image: "/images/receive-funds.png",
            content: {
                title: "Receive Funds & Grow",
                subtitle:
                    "Every morning, your previous day’s credit card transactions are automatically submitted for funding.",
                list: [
                    {
                        data: "Same-day or next-day payouts",
                    },
                    {
                        data: "Flexible repayment from future sales",
                    },
                ],
            },
        },
    ];

    return (
        <section
            id="how-it-works"
            className=" py-[56px] lg:py-[136px]  bg-gray-1 "
        >
            <div className="container space-y-[52px] lg:space-y-[133px]">
                <div className="space-y-4 lg:space-y-8 lg:max-w-[878px] mx-auto ">
                    <div className="flex justify-center">
                        <Badge>How it works</Badge>
                    </div>
                    <Title as="h3" className="text-center">
                        {" "}
                        Simple & Fast Receive Your Payment in 3 Steps!
                    </Title>
                    <Subtitle>
                        Empowering businesses with faster cash access, CASA
                        provides a secure, fast, and flexible solution to get
                        early payments for credit card sales.
                    </Subtitle>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-9 ">
                    {data?.map((ele, ind: number) => (
                        <Card key={ind} data={ele} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
