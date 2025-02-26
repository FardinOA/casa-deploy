import Subtitle from "~/components/common/subtitle";
import Title from "~/components/common/title";
import { Badge } from "~/components/ui/badge";

import ReviewCarousel from "./review-carousel";

const Reviews = () => {
    const data = [
        {
            rating: 5,
            logo: "/images/adyen.png",
            title: `"Game-Changer for My Business!"`,
            subtitle: `CASA has completely transformed my cash flow. As a restaurant owner, waiting for credit card payments used to be a struggle. Now, I get my funds within 24 hours, allowing me to pay suppliers and staff on time. The process is seamless, and the transparency in pricing is a huge plus.!`,
            user: {
                image: "/images/user.jpg",
                name: "Michael R",
                designation: "Restaurant Owner",
            },
        },
        {
            rating: 5,
            logo: "/images/adyen.png",
            title: `"Game-Changer for My Business!"`,
            subtitle: `CASA has completely transformed my cash flow. As a restaurant owner, waiting for credit card payments used to be a struggle. Now, I get my funds within 24 hours, allowing me to pay suppliers and staff on time. The process is seamless, and the transparency in pricing is a huge plus.!`,
            user: {
                image: "/images/user.jpg",
                name: "Michael R",
                designation: "Restaurant Owner",
            },
        },
        {
            rating: 5,
            logo: "/images/adyen.png",
            title: `"Game-Changer for My Business!"`,
            subtitle: `CASA has completely transformed my cash flow. As a restaurant owner, waiting for credit card payments used to be a struggle. Now, I get my funds within 24 hours, allowing me to pay suppliers and staff on time. The process is seamless, and the transparency in pricing is a huge plus.!`,
            user: {
                image: "/images/user.jpg",
                name: "Michael R",
                designation: "Restaurant Owner",
            },
        },
        {
            rating: 5,
            logo: "/images/adyen.png",
            title: `"Game-Changer for My Business!"`,
            subtitle: `CASA has completely transformed my cash flow. As a restaurant owner, waiting for credit card payments used to be a struggle. Now, I get my funds within 24 hours, allowing me to pay suppliers and staff on time. The process is seamless, and the transparency in pricing is a huge plus.!`,
            user: {
                image: "/images/user.jpg",
                name: "Michael R",
                designation: "Restaurant Owner",
            },
        },
        {
            rating: 5,
            logo: "/images/adyen.png",
            title: `"Game-Changer for My Business!"`,
            subtitle: `CASA has completely transformed my cash flow. As a restaurant owner, waiting for credit card payments used to be a struggle. Now, I get my funds within 24 hours, allowing me to pay suppliers and staff on time. The process is seamless, and the transparency in pricing is a huge plus.!`,
            user: {
                image: "/images/user.jpg",
                name: "Michael R",
                designation: "Restaurant Owner",
            },
        },
    ];
    return (
        <section id="reviews" className="   bg-white ">
            <div className="container space-y-[52px] lg:space-y-[133px]">
                <div className="space-y-4 lg:space-y-8 lg:max-w-[660px] mx-auto ">
                    <div className="flex justify-center">
                        <Badge>Reviews</Badge>
                    </div>
                    <Title as="h5" className="text-center">
                        Hear What Customers Say About CASA!
                    </Title>
                    <Subtitle>
                        Trusted by Thousands of Business Owners See what our
                        satisfied customers have to say about CASA.
                    </Subtitle>
                </div>

                <ReviewCarousel data={data} />
            </div>
        </section>
    );
};

export default Reviews;
