import React from "react";
import type { MetaFunction } from "@remix-run/node";
import HeroSection from "~/components/pages/home/HeroSection";
import Banner from "~/components/pages/home/banner";
import About from "~/components/pages/home/about";
import HowItWorks from "~/components/pages/home/how-it-works";
import WhyCasa from "~/components/pages/home/why-casa";
import Reviews from "~/components/pages/home/reviews";
import Pricing from "~/components/pages/home/pricing";
import Contact from "~/components/pages/home/contact";
import GetStarted from "~/components/pages/home/get-started";

export const meta: MetaFunction = () => {
    return [
        { title: "Home" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};
const Index: React.FC = () => {
    return (
        <div className="space-y-6">
            <HeroSection />
            <Banner />
            <About />
            <HowItWorks />
            <WhyCasa />
            <Reviews />
            <Pricing />
            <Contact />
            <GetStarted />
        </div>
    );
};

export default Index;
