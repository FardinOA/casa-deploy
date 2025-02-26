import Subtitle from "~/components/common/subtitle";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

interface ReviewCardProps {
    data: {
        rating: number;
        logo: string;
        title: string;
        subtitle: string;
        user: {
            image: string;
            name: string;
            designation: string;
        };
    };
}
const ReviewCard: React.FC<ReviewCardProps> = ({ data }) => {
    return (
        <div className="bg-gray-1 rounded-2xl lg:rounded-[25px] p-8 space-y-4 lg:space-y-10 ">
            <div className="flex justify-between items-center gap-6">
                <div className="flex items-center           ">
                    {Array(data?.rating ?? 0)
                        .fill(0)
                        .map((_, index) => (
                            <svg
                                key={`rating-${index}`}
                                className=" size-4 lg:size-8 "
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8 12.8589L12.944 16L11.632 10.08L16 6.09684L10.248 5.58316L8 0L5.752 5.58316L0 6.09684L4.368 10.08L3.056 16L8 12.8589Z"
                                    fill="#FFC006"
                                />
                            </svg>
                        ))}
                </div>
                <img
                    alt="logo"
                    src={data?.logo}
                    className="aspect-[60/24] object-contain w-[60px] lg:w-[125px] "
                />
            </div>

            <div className="space-y-3 lg:space-y-6">
                <p className=" font-bold text-[14px]/[20px] lg:text-[32px]/[50px] ">
                    {data?.title}
                </p>
                <Subtitle className="text-left">{data?.subtitle}</Subtitle>

                <div className="flex items-center gap-2 pt-2 lg:pt-4 ">
                    <Avatar>
                        <AvatarImage src={data?.user?.image} />
                        <AvatarFallback>{data?.user?.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                        <p className="font-semibold text-[12px]/[14px] lg:text-[20px]/[28px] ">
                            {data?.user?.name}
                        </p>
                        <p className="text-body-text text-[10px]/[12px] lg:text-[18px]/[30px] ">
                            {data?.user?.designation}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
