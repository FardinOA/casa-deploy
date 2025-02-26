import { Link } from "@remix-run/react";
import { navLinks } from "~/db/data";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { cn } from "~/lib/utils";
import UserMoveTo from "~/hooks/use-move-to";

export const Header = () => {
    const { moveTo } = UserMoveTo();
    const RenderLink = () => (
        <>
            {navLinks?.map((link) => (
                <li className="list-none text-left" key={link.url}>
                    <button
                        className="text-lg leading-[30px] text-black"
                        onClick={() => moveTo(link.url)}
                    >
                        {link.title}
                    </button>
                </li>
            ))}
        </>
    );

    return (
        <header
            className={cn(
                "sticky top-0  z-50",
                "bg-gradient-to-tr from-white/20 to-white backdrop-blur-sm "
            )}
        >
            <div className="relative py-4">
                {/* Animated Span using useAnimate */}
                {/* <span className="bg-overlay max-lg:hidden absolute top-0 left-0 bg-gradient-to-tr from-white/20 to-white/100 h-full w-full opacity-0" /> */}

                <nav className="container flex items-center justify-between">
                    <div className="text-lg font-bold">
                        <Link to="/">
                            <img
                                src="/logo.png"
                                alt="casa logo"
                                className="w-[50px] lg:w-[151px] aspect-[151/56.37]"
                            />
                        </Link>
                    </div>

                    <ul className="hidden lg:flex items-center gap-6 lg:gap-12">
                        <RenderLink />
                    </ul>

                    <div className="hidden lg:flex items-center relative z-10 gap-4">
                        <Button variant={"neutral"}>Sign In</Button>
                        <Button className="bg-black">Sign Up</Button>
                    </div>

                    <Sheet>
                        <SheetTrigger className="lg:hidden">
                            <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.5 4L18.5 4M8 10L18.5 10M2.5 16L18.5 16"
                                    stroke="#141414"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                />
                            </svg>
                        </SheetTrigger>

                        <SheetContent className="w-full" side={"left"}>
                            <SheetHeader>
                                <div className="text-lg font-bold">
                                    <Link to="/">
                                        <img
                                            src="/logo.png"
                                            alt="casa logo"
                                            className="w-[50px] lg:w-[151px] aspect-[151/56.37]"
                                        />
                                    </Link>
                                </div>
                            </SheetHeader>

                            <div className="mt-4 flex flex-col items-center gap-4">
                                <RenderLink />
                                <Button className="mt-8" variant={"neutral"}>
                                    Sign In
                                </Button>
                                <Button className="bg-black">Sign Up</Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </header>
    );
};
