import Subtitle from "~/components/common/subtitle";
import FactoringCard from "~/components/pages/home/hero/factoring-card";
import SalesOverviewFrom from "~/components/pages/home/hero/sales-overview-card";
import SecureCard from "~/components/pages/home/hero/secure-card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

const HeroSection: React.FC = () => {
    return (
        <section className=" container flex justify-center items-center pt-6 lg:pt-[141px]">
            <div>
                <div className="space-y-[52px]">
                    <div className="space-y-6 mx-auto max-w-[1042px]">
                        <div className="flex justify-center">
                            {" "}
                            <Badge>Fast. secure. hassle-free</Badge>
                        </div>
                        <h1 className="lg:pt-2 text-nowrap font-bold lg:font-extrabold text-black text-[32px]/[40px] text-center  flex flex-col justify-center items-center lg:text-[72px]/[82px]  ">
                            <span className="flex flex-col lg:flex-row lg:gap-2">
                                {" "}
                                <span> Get Paid</span>
                                <span className="flex items-center gap-2">
                                    Faster{" "}
                                    <svg
                                        viewBox="0 0 72 48"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-4 aspect-[24/16] lg:w-[72px] lg:h-[48px]"
                                    >
                                        <circle
                                            cx={48}
                                            cy={24}
                                            r={24}
                                            fill="#0F4E23"
                                        />
                                        <circle
                                            cx={24}
                                            cy={24}
                                            r={24}
                                            fill="#F1F68E"
                                        />
                                        <path
                                            d="M36.3992 17.275C36.2723 16.9696 36.0296 16.7268 35.7242 16.6C35.5739 16.5359 35.4125 16.502 35.2492 16.5H28.9992C28.6677 16.5 28.3497 16.6317 28.1153 16.8661C27.8809 17.1005 27.7492 17.4185 27.7492 17.75C27.7492 18.0815 27.8809 18.3995 28.1153 18.6339C28.3497 18.8683 28.6677 19 28.9992 19H32.2367L25.2492 25.9875L21.1367 21.8625C21.0205 21.7453 20.8822 21.6523 20.7299 21.5889C20.5776 21.5254 20.4142 21.4928 20.2492 21.4928C20.0842 21.4928 19.9208 21.5254 19.7685 21.5889C19.6161 21.6523 19.4779 21.7453 19.3617 21.8625L11.8617 29.3625C11.7445 29.4787 11.6515 29.617 11.5881 29.7693C11.5246 29.9216 11.4919 30.085 11.4919 30.25C11.4919 30.415 11.5246 30.5784 11.5881 30.7307C11.6515 30.883 11.7445 31.0213 11.8617 31.1375C11.9779 31.2547 12.1161 31.3477 12.2685 31.4111C12.4208 31.4746 12.5842 31.5072 12.7492 31.5072C12.9142 31.5072 13.0776 31.4746 13.2299 31.4111C13.3822 31.3477 13.5205 31.2547 13.6367 31.1375L20.2492 24.5125L24.3617 28.6375C24.4779 28.7547 24.6161 28.8477 24.7685 28.9111C24.9208 28.9746 25.0842 29.0072 25.2492 29.0072C25.4142 29.0072 25.5776 28.9746 25.7299 28.9111C25.8822 28.8477 26.0205 28.7547 26.1367 28.6375L33.9992 20.7625V24C33.9992 24.3315 34.1309 24.6495 34.3653 24.8839C34.5997 25.1183 34.9177 25.25 35.2492 25.25C35.5807 25.25 35.8987 25.1183 36.1331 24.8839C36.3675 24.6495 36.4992 24.3315 36.4992 24V17.75C36.4972 17.5867 36.4632 17.4253 36.3992 17.275Z"
                                            fill="#0F4E23"
                                        />
                                    </svg>{" "}
                                    Instant Cash
                                </span>{" "}
                            </span>
                            <span>for Businesses! </span>
                        </h1>
                        <Subtitle className="text-center text-[14px]/[22px] lg:text-[24px]/[36px] text-body-text ">
                            Stop waiting months for credit card payments. CASA
                            helps business owners access cash instantly by
                            converting card transactions into immediate funds.
                        </Subtitle>
                        <div className="flex justify-center">
                            <Button>Get Started</Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-9">
                        <SalesOverviewFrom />
                        <FactoringCard />
                        <SecureCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
