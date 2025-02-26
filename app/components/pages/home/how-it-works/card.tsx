import { cn } from "~/lib/utils";

interface CardProps {
    data: {
        image: string;
        content: {
            title: string;
            subtitle: string;
            list: {
                data: string;
                icon?: React.ReactNode;
            }[];
        };
    };
    className?: string;
    iconClass?: string;
    titleClass?: string;
    listDataClass?: string;
    extraData?: React.ReactNode;
}
const Card: React.FC<CardProps> = ({
    data,
    className,
    iconClass,
    titleClass,
    listDataClass,
    extraData,
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl lg:rounded-[25px] px-4 py-6 lg:py-[46px] lg:px-[28px] bg-white space-y-8 lg:space-y-9  ",
                className
            )}
        >
            <figure>
                <img
                    alt={data?.content?.title}
                    src={data?.image}
                    className="aspect-[312/291] w-full lg:aspect-[398/364] object-contain "
                />
            </figure>
            <div className="space-y-[20.5px] lg:space-y-6 ">
                <p
                    className={cn(
                        "font-bold text-[20px]/[20px] lg:text-2xl lg:leading-9 ",
                        titleClass
                    )}
                >
                    {data?.content?.title}
                </p>
                <p className="text-body-text text-[14px]/[22px] lg:text-xl lg:leading-8 ">
                    {data?.content.subtitle}
                </p>
                <ul className="space-y-4 lg:space-y-2 ">
                    {data?.content?.list?.map((item, index) => (
                        <li
                            className="flex items-center gap-[14px] lg:gap-4 "
                            key={index}
                        >
                            <p
                                className={cn(
                                    "aspect-square size-5 lg:size-[28px] rounded-full bg-light-green-2 flex items-center justify-center ",
                                    iconClass
                                )}
                            >
                                {item?.icon ?? (
                                    <svg
                                        viewBox="0 0 10 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-[10px] lg:w-4 h-[7px] lg:h-[10px] "
                                    >
                                        <path
                                            d="M9.77093 0.673631C9.70478 0.618613 9.62608 0.574944 9.53938 0.545144C9.45267 0.515343 9.35966 0.5 9.26573 0.5C9.1718 0.5 9.07879 0.515343 8.99208 0.545144C8.90538 0.574944 8.82668 0.618613 8.76053 0.673631L3.45949 5.0526L1.23235 3.20944C1.16367 3.15471 1.08259 3.11167 0.993752 3.08279C0.904911 3.05391 0.810045 3.03974 0.714569 3.04111C0.619093 3.04247 0.524877 3.05933 0.437301 3.09073C0.349725 3.12213 0.270503 3.16746 0.204159 3.22411C0.137815 3.28077 0.085649 3.34765 0.050638 3.42094C0.015627 3.49423 -0.00154303 3.57249 0.000108809 3.65126C0.00176064 3.73002 0.0222019 3.80774 0.0602651 3.87999C0.0983283 3.95223 0.153268 4.01759 0.221948 4.07232L2.95429 6.32637C3.02044 6.38139 3.09914 6.42506 3.18585 6.45486C3.27256 6.48466 3.36556 6.5 3.45949 6.5C3.55343 6.5 3.64643 6.48466 3.73314 6.45486C3.81985 6.42506 3.89855 6.38139 3.96469 6.32637L9.77093 1.53651C9.84315 1.48154 9.9008 1.41483 9.94022 1.34058C9.97965 1.26632 10 1.18614 10 1.10507C10 1.02401 9.97965 0.94382 9.94022 0.869566C9.9008 0.795311 9.84315 0.728599 9.77093 0.673631Z"
                                            fill="#0F4E23"
                                        />
                                    </svg>
                                )}
                            </p>
                            <p
                                className={cn(
                                    "text-body-text font-semibold  text-[12px]/[22px] lg:text-[18px]/[30px] ",
                                    listDataClass
                                )}
                            >
                                {item?.data}
                            </p>
                        </li>
                    ))}
                </ul>
                {extraData}
            </div>
        </div>
    );
};

export default Card;
