import { Button } from "~/components/ui/button";

const GetStarted = () => {
    return (
        <section className="container  py-[56px] lg:py-[136px] ">
            <div className="bg-primary   rounded-2xl lg:rounded-[25px] lg:flex lg:items-center lg:justify-center  ">
                <div className="  py-10 px-8 lg:py-[130px] lg:px-20 rounded-2xl lg:rounded-[25px] mx-auto max-w-[1090px] ">
                    <h6 className="font-bold text-[32px]/[40px] lg:text-[72px]/[82px] text-center text-white">
                        Unlock Instant Cash Flow for Your Business!
                    </h6>
                    <p className="text-[14px]/[22px] lg:text-[24px]/[36px] text-center text-white mt-4 mb-6 lg:mt-9 lg:mb-9 ">
                        Running a business shouldn’t mean waiting weeks for
                        credit card payments to clear. With CASA, you can
                        convert your daily transactions into instant cash,
                    </p>
                    <div className="flex justify-center">
                        <Button className="bg-yellow-1 text-black hover:bg-yellow-3">
                            Let&apos;s get started
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;
