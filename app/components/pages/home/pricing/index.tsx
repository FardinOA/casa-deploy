import Subtitle from "~/components/common/subtitle";
import Title from "~/components/common/title";
import { Badge } from "~/components/ui/badge";
import PriceCard from "./price-card";
import { Fragment } from "react";

const Pricing = () => {
    const data = [
        {
            title: "Basic Plan",
            discount: 2,
            subtitle: "For businesses processing up to $10,000/month",
            included: [
                "Instant Fund Transfers",
                "Real-time Transaction Monitoring",
                "Seamless POS Integration",
                "24/7 Customer Support",
            ],
        },
        {
            title: "Enterprise Plan",

            subtitle: "Tailored for high-volume businesses",
            included: [
                "Instant Fund Transfers",
                "Real-time Transaction Monitoring",
                "Seamless POS Integration",
                "24/7 Customer Support",
            ],
        },
        {
            title: "Growth Plan",
            discount: 1.5,
            subtitle:
                " For businesses processing up to $10,000 – $50,000/month",
            included: [
                "Instant Fund Transfers",
                "Real-time Transaction Monitoring",
                "Seamless POS Integration",
                "24/7 Customer Support",
            ],
        },
    ];
    return (
        <section id="pricing" className=" py-[56px] lg:py-[136px]  bg-white ">
            <div className="container space-y-[52px] lg:space-y-[133px]">
                <div className="space-y-4 lg:space-y-8 lg:max-w-[660px] mx-auto ">
                    <div className="flex justify-center">
                        <Badge>Pricing</Badge>
                    </div>
                    <Title as="h6" className="text-center">
                        Simple, Transparent Pricing No Hidden Fees!
                    </Title>
                    <Subtitle>
                        Trusted by Thousands of Business Owners See what our
                        satisfied customers have to say about CASA.
                    </Subtitle>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-9 ">
                    {data?.map((ele, ind) => (
                        <Fragment key={`pricing-${ind}`}>
                            <PriceCard diff={ind == 1} data={ele} />
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
