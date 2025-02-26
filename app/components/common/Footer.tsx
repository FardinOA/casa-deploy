import { Link } from "@remix-run/react";
import Subtitle from "./subtitle";

export default function Footer() {
    const data = [
        {
            title: "Quick Links",
            links: [
                { title: "Home", url: "#" },
                { title: "About Service", url: "#" },
                { title: "Procedure of Service", url: "#" },
                { title: "Pricing", url: "#" },
                { title: "Why Casa is Different", url: "#" },
                { title: "Contact", url: "#" },
            ],
        },
        {
            title: "Support",
            links: [
                { title: "Privacy Policy", url: "#" },
                { title: "Documentation", url: "#" },
                { title: "Community", url: "#" },
                { title: "Support Center", url: "#" },
                { title: "Contact", url: "#" },
            ],
        },
    ];

    return (
        <footer className="  py-16 space-y-8">
            <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 ">
                <div className=" lg:col-span-4 space-y-7 lg:space-y-9">
                    <figure>
                        <img
                            alt="logo"
                            src="/logo.png"
                            className="object-contain aspect-[150/56] lg:W-[150PX]  "
                        />
                    </figure>
                    <Subtitle className="text-left">
                        CASA provides fast, reliable, and transparent factoring
                        services, helping business owners turn credit card
                        transactions into instant cash flow.
                    </Subtitle>
                    <p className="font-bold text-[20px]/[32.1px]  ">
                        Follow us on
                    </p>

                    <div className="flex items-center gap-4 ">
                        <Link
                            to={`#`}
                            className="flex items-center justify-center size-9 lg:size-10 aspect-square rounded-full [&>svg]:fill-primary [&>svg]:hover:fill-white stroke-primary bg-light-green-1 hover:bg-primary hover:stroke-white transition-all duration-300  "
                        >
                            <svg
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4 lg:size-5"
                            >
                                <g clipPath="url(#clip0_723_570)">
                                    <g clipPath="url(#clip1_723_570)">
                                        <path d="M11.6653 11.1116H13.7487L14.582 7.77832H11.6653V6.11166C11.6653 5.25332 11.6653 4.44499 13.332 4.44499H14.582V1.64499C14.3103 1.60916 13.2845 1.52832 12.2012 1.52832C9.93869 1.52832 8.33203 2.90916 8.33203 5.44499V7.77832H5.83203V11.1116H8.33203V18.195H11.6653V11.1116Z" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_723_570">
                                        <rect width={20} height={20} />
                                    </clipPath>
                                    <clipPath id="clip1_723_570">
                                        <rect width={20} height={20} />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                        <Link
                            to={`#`}
                            className="flex items-center justify-center size-9 lg:size-10 aspect-square rounded-full [&>svg]:fill-primary [&>svg]:hover:fill-white stroke-primary bg-light-green-1 hover:bg-primary hover:stroke-white transition-all duration-300  "
                        >
                            <svg
                                className="w-[17px] lg:w-4  "
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M14.85 14.6786L9.48975 7.06748L8.88369 6.20674L5.048 0.761974L4.73015 0.310547H0.019043L1.16786 1.94253L6.26685 9.18247L6.87292 10.0419L10.9699 15.8591L11.2877 16.3092H16.0002L14.85 14.6786ZM11.8467 15.2682L7.59076 9.22459L6.9847 8.36385L2.04598 1.35291H4.16988L8.1645 7.02405L8.77056 7.88479L13.9719 15.2695H11.8467V15.2682Z" />
                                <path d="M6.98451 8.36523L7.59057 9.22597L6.87273 10.042L1.35892 16.3106H0L6.26667 9.18254L6.98451 8.36523Z" />
                                <path d="M15.4319 0.311523L9.4898 7.06714L8.77061 7.88313L8.16455 7.02371L8.88374 6.2064L12.9093 1.62764L14.073 0.311523H15.4319Z" />
                            </svg>
                        </Link>
                        <Link
                            to={`#`}
                            className="flex items-center justify-center size-9 lg:size-10 aspect-square rounded-full [&>svg]:fill-primary [&>svg]:hover:fill-white stroke-primary bg-light-green-1 hover:bg-primary hover:stroke-white transition-all duration-300  "
                        >
                            <svg
                                className="size-4 lg:size-5"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_723_574)">
                                    <g clipPath="url(#clip1_723_574)">
                                        <path d="M5.78255 4.02785C5.78233 4.46988 5.60652 4.89372 5.2938 5.20612C4.98109 5.51853 4.55708 5.69391 4.11505 5.69369C3.67302 5.69347 3.24919 5.51766 2.93678 5.20494C2.62438 4.89223 2.44899 4.46821 2.44922 4.02619C2.44944 3.58416 2.62524 3.16032 2.93796 2.84792C3.25068 2.53552 3.67469 2.36013 4.11672 2.36035C4.55874 2.36057 4.98258 2.53638 5.29498 2.8491C5.60739 3.16182 5.78277 3.58583 5.78255 4.02785ZM5.83255 6.92785H2.49922V17.3612H5.83255V6.92785ZM11.0992 6.92785H7.78255V17.3612H11.0659V11.8862C11.0659 8.83619 15.0409 8.55285 15.0409 11.8862V17.3612H18.3325V10.7528C18.3325 5.61119 12.4492 5.80285 11.0659 8.32785L11.0992 6.92785Z" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_723_574">
                                        <rect
                                            width={20}
                                            height={20}
                                            fill="white"
                                        />
                                    </clipPath>
                                    <clipPath id="clip1_723_574">
                                        <rect
                                            width={20}
                                            height={20}
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                        <Link
                            to={`#`}
                            className="flex items-center justify-center size-9 lg:size-10 aspect-square rounded-full [&>svg]:fill-primary [&>svg]:hover:fill-white stroke-primary bg-light-green-1 hover:bg-primary hover:stroke-white transition-all duration-300  "
                        >
                            <svg
                                className="size-4 lg:size-5"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_723_576)">
                                    <g clipPath="url(#clip1_723_576)">
                                        <path d="M10.0013 1.52832C12.2655 1.52832 12.548 1.53666 13.4363 1.57832C14.3238 1.61999 14.928 1.75916 15.4597 1.96582C16.0097 2.17749 16.473 2.46416 16.9363 2.92666C17.3601 3.34324 17.688 3.84715 17.8972 4.40332C18.103 4.93416 18.243 5.53916 18.2847 6.42666C18.3238 7.31499 18.3347 7.59749 18.3347 9.86163C18.3347 12.1258 18.3263 12.4083 18.2847 13.2966C18.243 14.1841 18.103 14.7883 17.8972 15.32C17.6886 15.8764 17.3606 16.3805 16.9363 16.7966C16.5196 17.2202 16.0158 17.5481 15.4597 17.7575C14.9288 17.9633 14.3238 18.1033 13.4363 18.145C12.548 18.1841 12.2655 18.195 10.0013 18.195C7.73714 18.195 7.45464 18.1866 6.56631 18.145C5.67881 18.1033 5.07464 17.9633 4.54297 17.7575C3.98658 17.5487 3.48258 17.2207 3.06631 16.7966C2.64248 16.3801 2.31458 15.8762 2.10547 15.32C1.89881 14.7891 1.75964 14.1841 1.71797 13.2966C1.67881 12.4083 1.66797 12.1258 1.66797 9.86163C1.66797 7.59749 1.67631 7.31499 1.71797 6.42666C1.75964 5.53832 1.89881 4.93499 2.10547 4.40332C2.314 3.84681 2.64198 3.34276 3.06631 2.92666C3.4827 2.50268 3.98666 2.17476 4.54297 1.96582C5.07464 1.75916 5.67797 1.61999 6.56631 1.57832C7.45464 1.53916 7.73714 1.52832 10.0013 1.52832ZM10.0013 5.69499C8.89624 5.69499 7.83643 6.13398 7.05503 6.91538C6.27363 7.69678 5.83464 8.75659 5.83464 9.86163C5.83464 10.9667 6.27363 12.0265 7.05503 12.8079C7.83643 13.5893 8.89624 14.0283 10.0013 14.0283C11.1064 14.0283 12.1662 13.5893 12.9476 12.8079C13.729 12.0265 14.168 10.9667 14.168 9.86163C14.168 8.75659 13.729 7.69678 12.9476 6.91538C12.1662 6.13398 11.1064 5.69499 10.0013 5.69499ZM15.418 5.48666C15.418 5.21039 15.3082 4.94544 15.1129 4.75009C14.9175 4.55474 14.6526 4.44499 14.3763 4.44499C14.1001 4.44499 13.8351 4.55474 13.6398 4.75009C13.4444 4.94544 13.3347 5.21039 13.3347 5.48666C13.3347 5.76292 13.4444 6.02787 13.6398 6.22323C13.8351 6.41858 14.1001 6.52832 14.3763 6.52832C14.6526 6.52832 14.9175 6.41858 15.1129 6.22323C15.3082 6.02787 15.418 5.76292 15.418 5.48666ZM10.0013 7.36166C10.6644 7.36166 11.3003 7.62505 11.7691 8.09389C12.2379 8.56273 12.5013 9.19861 12.5013 9.86163C12.5013 10.5247 12.2379 11.1606 11.7691 11.6294C11.3003 12.0982 10.6644 12.3616 10.0013 12.3616C9.33826 12.3616 8.70238 12.0982 8.23354 11.6294C7.7647 11.1606 7.50131 10.5247 7.50131 9.86163C7.50131 9.19861 7.7647 8.56273 8.23354 8.09389C8.70238 7.62505 9.33826 7.36166 10.0013 7.36166Z" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_723_576">
                                        <rect
                                            width={20}
                                            height={20}
                                            fill="white"
                                        />
                                    </clipPath>
                                    <clipPath id="clip1_723_576">
                                        <rect
                                            width={20}
                                            height={20}
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className=" lg:col-span-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {data?.map((ele) => (
                        <div
                            className="space-y-6 lg:space-y-9"
                            key={ele?.title}
                        >
                            <p className="font-bold text-2xl  ">{ele?.title}</p>
                            <ul className="space-y-3 lg:space-y-6">
                                {ele?.links?.map((item) => (
                                    <li
                                        key={item?.title}
                                        className="text-body-text text-[18px]/[21.09px] lg:text-[20px]/[32px]  "
                                    >
                                        {item?.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="space-y-6 lg:space-y-9">
                        <p className="font-bold text-2xl  ">Get In touch</p>
                        <ul className="space-y-4 lg:space-y-10">
                            <li className=" space-y-3 ">
                                <div className="flex items-center gap-4">
                                    <p className="size-9 aspect-square rounded-full bg-light-green-1 flex items-center justify-center ">
                                        <svg
                                            className="size-4 lg:size-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.01 13.573C10.431 13.573 9.147 12.289 9.147 10.71C9.147 9.131 10.431 7.847 12.01 7.847C13.589 7.847 14.874 9.131 14.874 10.71C14.874 12.289 13.589 13.573 12.01 13.573ZM12 2.5C7.589 2.5 4 6.133 4 10.599C4 16.007 8.654 21.5 12 21.5C15.345 21.5 20 16.007 20 10.599C20 6.133 16.411 2.5 12 2.5Z"
                                                fill="#0F4E23"
                                            />
                                        </svg>
                                    </p>
                                    <p className="font-semibold text-xl text-body-text">
                                        Address
                                    </p>
                                </div>
                                <p className="text-body-text text-[14px]/[22px] lg:text-[20px]/[32px] ">
                                    123 Business Street, Suite 500, New York, NY
                                    10001
                                </p>
                            </li>
                            <li className=" space-y-3 ">
                                <div className="flex items-center gap-4">
                                    <p className="size-9 aspect-square rounded-full bg-light-green-1 flex items-center justify-center ">
                                        <svg
                                            className="size-4 lg:size-5"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M4.43113 1.07247C4.90337 1.17007 5.27945 1.48735 5.51311 1.90654L6.25746 3.24192C6.53163 3.73375 6.76236 4.14766 6.91303 4.50747C7.07287 4.88915 7.1678 5.26553 7.12441 5.68166C7.08101 6.0978 6.91047 6.44649 6.67532 6.78698C6.45365 7.10797 6.14248 7.46536 5.77273 7.89005L4.67856 9.14687C4.48249 9.37209 4.38445 9.4847 4.37549 9.62545C4.36653 9.7662 4.44688 9.88642 4.60758 10.1269C5.97724 12.1761 7.82319 14.0227 9.8741 15.3935C10.1145 15.5542 10.2348 15.6346 10.3755 15.6256C10.5163 15.6166 10.6289 15.5186 10.8541 15.3225L12.111 14.2283C12.5357 13.8585 12.8931 13.5474 13.2141 13.3257C13.5545 13.0906 13.9032 12.92 14.3194 12.8766C14.7355 12.8332 15.1119 12.9282 15.4936 13.088C15.8533 13.2387 16.2672 13.4694 16.759 13.7435L18.0945 14.4879C18.5137 14.7216 18.831 15.0977 18.9286 15.5699C19.0272 16.0471 18.8817 16.5267 18.5604 16.9209C17.3947 18.3512 15.5269 19.2619 13.5676 18.8666C12.3632 18.6237 11.1749 18.2189 9.73763 17.3947C6.84983 15.7385 4.2606 13.1479 2.60638 10.2634C1.78211 8.82615 1.37735 7.63783 1.1344 6.43344C0.739148 4.47409 1.64984 2.60636 3.08015 1.4406C3.47434 1.11932 3.95397 0.973843 4.43113 1.07247Z"
                                                fill="#0F4E23"
                                            />
                                        </svg>
                                    </p>
                                    <p className="font-semibold text-xl text-body-text">
                                        Phone
                                    </p>
                                </div>
                                <p className="text-body-text text-[14px]/[22px] lg:text-[20px]/[32px] ">
                                    1 (800) 123-4567
                                </p>
                            </li>
                            <li className=" space-y-3 ">
                                <div className="flex items-center gap-4">
                                    <p className="size-9 aspect-square rounded-full bg-light-green-1 flex items-center justify-center ">
                                        <svg
                                            className="size-4 lg:size-5"
                                            viewBox="0 0 21 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.7353 3.16739C11.1055 3.12649 9.89464 3.1265 8.26483 3.16739L8.20246 3.16896C6.94466 3.20049 5.90976 3.22643 5.07562 3.37151C4.19031 3.5255 3.44905 3.82539 2.82121 4.45483C2.19666 5.08097 1.89762 5.81055 1.74613 6.68185C1.60395 7.49954 1.58244 8.50858 1.5564 9.72984L1.55506 9.79267C1.5373 10.6243 1.53731 11.0658 1.55507 11.8974L1.55641 11.9603C1.58245 13.1815 1.60397 14.1906 1.74614 15.0083C1.89764 15.8796 2.19668 16.6091 2.82123 17.2353C3.44906 17.8647 4.19032 18.1646 5.07563 18.3186C5.90977 18.4637 6.94466 18.4896 8.20246 18.5212L8.26485 18.5227C9.89466 18.5636 11.1055 18.5636 12.7353 18.5227L12.7977 18.5211C14.0555 18.4896 15.0904 18.4637 15.9245 18.3186C16.8099 18.1646 17.5511 17.8647 18.179 17.2353C18.8035 16.6091 19.1025 15.8795 19.254 15.0083C19.3962 14.1906 19.4177 13.1815 19.4438 11.9603L19.4451 11.8974C19.4629 11.0658 19.4629 10.6243 19.4451 9.79268L19.4438 9.72986C19.4177 8.50861 19.3962 7.49954 19.254 6.68185C19.1025 5.81056 18.8035 5.08098 18.1789 4.45484C17.8261 4.10112 17.4375 3.85147 17.0076 3.6733C16.9422 3.63758 16.8721 3.61066 16.799 3.59348C16.5242 3.49658 16.2331 3.42519 15.9245 3.37152C15.0904 3.22643 14.0555 3.20048 12.7977 3.16895L12.7353 3.16739ZM17.7332 8.2203C17.7171 7.88238 17.709 7.71342 17.5867 7.64596C17.4643 7.5785 17.3139 7.66373 17.013 7.83419L13.4832 9.83422C12.4002 10.4479 11.4843 10.845 10.4999 10.845C9.51558 10.845 8.59963 10.4479 7.51662 9.83422L3.98712 7.83437C3.68627 7.66391 3.53585 7.57868 3.41348 7.64614C3.29111 7.71359 3.28306 7.88256 3.26694 8.22049C3.24522 8.67592 3.23344 9.2039 3.22011 9.82813C3.20286 10.6361 3.20287 11.054 3.22012 11.862C3.24788 13.162 3.26892 14.0445 3.38701 14.7237C3.49821 15.3632 3.68374 15.7432 4.00109 16.0613C4.31516 16.3762 4.7003 16.5649 5.36137 16.6799C6.05986 16.8014 6.97089 16.8264 8.30668 16.8599C9.9086 16.9001 11.0916 16.9001 12.6935 16.8599C14.0293 16.8264 14.9403 16.8014 15.6388 16.6799C16.2999 16.5649 16.685 16.3762 16.9991 16.0613C17.3164 15.7432 17.502 15.3632 17.6132 14.7237C17.7313 14.0445 17.7523 13.162 17.7801 11.862C17.7973 11.054 17.7973 10.6361 17.78 9.82814C17.7667 9.20381 17.7549 8.67577 17.7332 8.2203Z"
                                                fill="#0F4E23"
                                            />
                                        </svg>
                                    </p>
                                    <p className="font-semibold text-xl text-body-text">
                                        Email
                                    </p>
                                </div>
                                <p className="text-body-text text-[14px]/[22px] lg:text-[20px]/[32px] ">
                                    123 Business Street, Suite 500, New York, NY
                                    10001
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className=" border-t  pt-4 flex items-center gap-5 justify-between font-medium text-[10px]/[24px] lg:text-[14px]/[24px] text-body-text">
                    <p>Copyright © 2025 all rights Reserved.</p>
                    <div className="flex items-center gap-4">
                        <p>Privacy</p>
                        <p>Security</p>
                        <p>Terms</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
