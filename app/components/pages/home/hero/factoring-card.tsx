import CardIcon from "./card-icon";
import CardTitle from "./card-title";

const FactoringCard = () => {
    return (
        <div className="rounded-2xl lg:rounded-[25px] px-4 py-6 lg:py-[46px] lg:px-[28px] bg-light-green-3 space-y-8 ">
            <div className="flex items-center gap-2 lg:gap-6">
                <CardIcon>
                    <svg
                        className="w-[13px] h-3 lg:w-6 lg:h-6 "
                        viewBox="0 0 13 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_732_2652)">
                            <path
                                d="M5 0L0.5 6H5L2 12L12.5 4.5H6.5L11 0H5Z"
                                fill="#0F4E23"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_732_2652">
                                <rect
                                    width={12}
                                    height={12}
                                    fill="white"
                                    transform="translate(0.5)"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </CardIcon>{" "}
                <CardTitle>Factoring Possible Amount.</CardTitle>
            </div>
            <div className="bg-white rounded-2xl p-4 mx-auto max-w-[180.18px] lg:max-w-[245px] space-y-3 lg:space-y-4 ">
                <p className="text-center text-body-text text-base lg:text-2xl lg:leading-9 ">
                    Available amount
                </p>
                <p className="flex items-center justify-center gap-4 font-black lg:font-semibold text-base lg:text-[32px]/[40px] ">
                    $15,375{" "}
                    <span className="text-sm lg:text-lg font-[600] ">USD</span>
                </p>
            </div>
            <div className="bg-white rounded-[18.8px] lg:rounded-[25px] p-4  lg:pb-5  space-y-5 lg:space-y-[30px]  ">
                <div className="flex items-center gap-2 lg:p-1 lg:gap-6">
                    <CardIcon>
                        <svg
                            className="w-[17px] h-4 lg:w-6 lg:h-6 "
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_732_2664)">
                                <path
                                    d="M12.0541 5.33333C11.9214 4.95683 11.679 4.62864 11.3582 4.39102C11.0375 4.1534 10.6529 4.01722 10.2541 4H7.5874C7.05697 4 6.54826 4.21071 6.17319 4.58579C5.79812 4.96086 5.5874 5.46957 5.5874 6C5.5874 6.53043 5.79812 7.03914 6.17319 7.41421C6.54826 7.78929 7.05697 8 7.5874 8H10.2541C10.7845 8 11.2932 8.21071 11.6683 8.58579C12.0434 8.96086 12.2541 9.46957 12.2541 10C12.2541 10.5304 12.0434 11.0391 11.6683 11.4142C11.2932 11.7893 10.7845 12 10.2541 12H7.5874C7.18857 11.9828 6.80401 11.8466 6.48322 11.609C6.16244 11.3714 5.9201 11.0432 5.7874 10.6667"
                                    stroke="#141414"
                                    strokeWidth="1.50439"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8.9209 12V14M8.9209 2V4V2Z"
                                    stroke="#141414"
                                    strokeWidth="1.50439"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_732_2664">
                                    <rect
                                        width={16}
                                        height={16}
                                        fill="white"
                                        transform="translate(0.920898)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </CardIcon>{" "}
                    <CardTitle className="text-base">
                        Factored amount vs. remaining balance{" "}
                    </CardTitle>
                </div>

                <div className="py-[18px] px-4 rounded-[18.8px] lg:rounded-[25px ] bg-light-green-2 space-y-5   ">
                    <p className="flex items-center gap-4 justify-between">
                        <span className="font-semibold text-sm lg:text-[20px]/[28px] text-body-text">
                            Factored Balance
                        </span>
                        <span className="font-semibold text-base lg:text-[24px]/[34px] ">
                            $11,531.25
                        </span>
                    </p>

                    <div className="w-full   rounded-full bg-yellow-1 relative h-[32px] ">
                        <div className="w-[75%] bg-primary h-full text-center flex items-center px-[33.1px] text-white font-semibold rounded-full absolute top-0 left-0 ">
                            75%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FactoringCard;
