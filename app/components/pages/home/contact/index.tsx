import Subtitle from "~/components/common/subtitle";
import Title from "~/components/common/title";
import { Badge } from "~/components/ui/badge";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";

const Contact = () => {
    return (
        <section id="contact" className=" py-[56px] lg:py-[136px]  bg-gray-1 ">
            <div className="container space-y-[52px] lg:space-y-[133px]">
                <div className="space-y-4 lg:space-y-8 lg:max-w-[660px] mx-auto ">
                    <div className="flex justify-center">
                        <Badge>Contact</Badge>
                    </div>
                    <Title as="h6" className="text-center">
                        We’re Here to Help – Get in Touch with CASA
                    </Title>
                    <Subtitle>
                        Trusted by Thousands of Business Owners See what our
                        satisfied customers have to say about Casa.
                    </Subtitle>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[76px]">
                    <div className="bg-white rounded-2xl lg:rounded-[25px] py-6 px-[39px] lg:py-[50px] lg:px-[80px] space-y-6 ">
                        <h3 className="font-semibold text-[16px]/[22px] lg:text-[32px]/[40px]  ">
                            Have Questions? Feel Free to Reach Out!
                        </h3>

                        <form className="space-y-4 lg:space-y-9 ">
                            <div className="space-y-3 lg:space-y-6">
                                <Label className="lg:text-xl">Name</Label>
                                <Input
                                    placeholder="Full Name"
                                    className="border-none bg-gray-2 py-2 px-4 rounded-[8px] lg:rounded-[12px] lg:py-[28px] lg:px-9 "
                                />
                            </div>
                            <div className="space-y-3 lg:space-y-6">
                                <Label className="lg:text-xl">Email*</Label>
                                <Input
                                    placeholder="Email"
                                    className="border-none bg-gray-2 py-2 px-4 rounded-[8px] lg:rounded-[12px] lg:py-[28px] lg:px-9 "
                                />
                            </div>
                            <div className="space-y-3 lg:space-y-6">
                                <Label className="lg:text-xl">
                                    Business Name
                                </Label>
                                <Input
                                    placeholder="Company name"
                                    className="border-none bg-gray-2 py-2 px-4 rounded-[8px] lg:rounded-[12px] lg:py-[28px] lg:px-9 "
                                />
                            </div>
                            <div className="space-y-3 lg:space-y-6">
                                <Label className="lg:text-xl">Message</Label>
                                <Textarea
                                    placeholder="Write your opinion"
                                    className="border-none bg-gray-2 py-2 px-4 rounded-[8px] lg:rounded-[12px] lg:py-[28px] lg:px-9 resize-none h-[90px] lg:h-[190px] "
                                />
                            </div>
                            <div className="pt-2">
                                <Button className="w-full">Send Message</Button>
                            </div>
                        </form>
                    </div>{" "}
                    <div>
                        <figure>
                            <img
                                alt="contact"
                                src="/images/contact.png"
                                className="object-contain aspect-[662/878] w-full "
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
