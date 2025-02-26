const Banner = () => {
    const logos = [
        {
            src: "cubyn.png",
            alt: "cubyn",
            width: 160,
            height: 36,
            mobileWidth: 64,
            mobileHeight: 14,
        },
        {
            src: "bastion.png",
            alt: "bastion",
            width: 166,
            height: 36,
            mobileWidth: 64,
            mobileHeight: 14,
        },
        {
            src: "digits.png",
            alt: "digits",
            width: 224,
            height: 40,
            mobileWidth: 64,
            mobileHeight: 14,
        },
        {
            src: "pipe.png",
            alt: "pipe",
            width: 112,
            height: 36,
            mobileWidth: 44,
            mobileHeight: 14,
        },
        {
            src: "ramp.png",
            alt: "ramp",
            width: 154,
            height: 40,
            mobileWidth: 56,
            mobileHeight: 14,
        },
    ];

    return (
        <section className="bg-primary !mt-0">
            <div className="container overflow-hidden py-6  lg:py-[50px] flex items-center gap-6 lg:gap-9 divide-light-green-4 divide-x-2  ">
                <div>
                    <p className="font-bold lg:text-[24px]/[34px] text-gray-1 ">
                        Trusted by <br /> Top Companies
                    </p>
                </div>
                {/* <div className=" h-full border border-light-green-4 ">f</div> */}
                <div className="  flex-1 pl-6 lg:pl-9 flex items-center justify-between gap-4  ">
                    {logos.map((logo) => (
                        <img
                            key={logo.src}
                            alt={logo.alt}
                            src={`/images/banner/${logo.src}`}
                            width={logo.width}
                            height={logo.height}
                            className={`aspect-auto w-auto max-lg:h-[14px] `}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Banner;
