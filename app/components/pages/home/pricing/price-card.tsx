import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

interface PriceCardProps {
    data: {
        title: string;
        discount?: number;
        subtitle: string;
        included: string[];
    };
    diff?: boolean;
}
const PriceCard: React.FC<PriceCardProps> = ({ data, diff }) => {
    return (
        <div
            className={cn(
                "rounded-2xl lg:rounded-[25px] py-9 px-6 space-y-[18px] lg:space-y-6 bg-gray-2 ",
                diff && "bg-primary"
            )}
        >
            <h3
                className={cn(
                    "text-body-text font-bold text-lg leading-6 lg:text-2xl lg:leading-[34px] ",
                    diff && "text-white"
                )}
            >
                {data?.title}
            </h3>
            <p
                className={cn(
                    "font-bold text-[28px]/[36px] lg:text-[48px]/[56.25px]  ",
                    diff && "text-white"
                )}
            >
                {data?.discount ? `${data?.discount}%` : null}
                {data?.discount ? (
                    <span className="text-body-text font-semibold text-[12px]/[16.39px] lg:text-[16px]/[21.86px] pl-2 ">
                        Discount Rate
                    </span>
                ) : (
                    "Custom Rate"
                )}
            </p>
            <div>
                <Button
                    className={cn(
                        "bg-white w-full text-black mt-2 lg:mt-3 ",
                        diff && "bg-yellow-1 hover:bg-white hover:text-black"
                    )}
                >
                    Get Started
                </Button>
            </div>
            <p
                className={cn(
                    "text-body-text font-semibold text-base lg:text-xl pt-[6px] lg:pt-3 ",
                    diff && "text-white"
                )}
            >
                {data?.subtitle}
            </p>

            <div className="bg-white p-6 space-y-6 lg:space-y-9 rounded-[18.75px] lg:rounded-[25px] ">
                <p className="font-bold  text-base lg:text-xl leading-4 ">
                    What&apos;s Included?{" "}
                </p>
                <ul className="space-y-3 lg:space-y-4">
                    {data?.included?.map((item) => (
                        <li
                            className="flex items-center gap-3 lg:gap-4"
                            key={item}
                        >
                            <p className="aspect-square bg-yellow-1 rounded-full size-[18px] lg:size-6 flex items-center justify-center ">
                                <svg
                                    className="w-[11px] h-2 lg:w-[13.56px] lg:h-[9.86px]  "
                                    viewBox="0 0 11 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.2743 0.223696C10.2082 0.150339 10.1295 0.0921135 10.0428 0.052379C9.95608 0.0126446 9.86308 -0.0078125 9.76915 -0.0078125C9.67521 -0.0078125 9.58221 0.0126446 9.4955 0.052379C9.40879 0.0921135 9.3301 0.150339 9.26395 0.223696L3.96291 6.06231L1.73576 3.60477C1.66709 3.5318 1.58601 3.47442 1.49717 3.43591C1.40833 3.3974 1.31346 3.37851 1.21799 3.38033C1.12251 3.38215 1.0283 3.40463 0.940719 3.4465C0.853143 3.48837 0.773921 3.5488 0.707577 3.62434C0.641233 3.69988 0.589067 3.78906 0.554056 3.88678C0.519045 3.9845 0.501875 4.08884 0.503527 4.19386C0.505179 4.29888 0.52562 4.40251 0.563683 4.49884C0.601746 4.59517 0.656686 4.6823 0.725366 4.75528L3.45771 7.76068C3.52386 7.83404 3.60256 7.89226 3.68927 7.932C3.77598 7.97173 3.86898 7.99219 3.96291 7.99219C4.05684 7.99219 4.14985 7.97173 4.23656 7.932C4.32327 7.89226 4.40196 7.83404 4.46811 7.76068L10.2743 1.3742C10.3466 1.30091 10.4042 1.21196 10.4436 1.11296C10.4831 1.01395 10.5034 0.907035 10.5034 0.798949C10.5034 0.690862 10.4831 0.583948 10.4436 0.484942C10.4042 0.385936 10.3466 0.296986 10.2743 0.223696Z"
                                        fill="#0F4E23"
                                    />
                                </svg>
                            </p>
                            <span className="text-body-text font-bold text-sm lg:text-[18px]/[30px] ">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PriceCard;
