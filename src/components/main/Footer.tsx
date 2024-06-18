import Link from "next/link";
import React from "react";
import {
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
    RxDiscordLogo,
} from "react-icons/rx";

const Footer = () => {
    return (
        <footer className="relative bottom-0 z-40 m-4 w-full bg-gray-800 p-8 text-white ">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <h2 className="mb-4 text-2xl font-bold">About Us</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>
                    <div>
                        <h2 className="mb-4 text-2xl font-bold">Contact</h2>
                        <p>Email: anshroshan813210@gmail.com</p>
                        <p>Phone: +91 xxx xxx 7742</p>
                    </div>
                    <div>
                        <h2 className="z-100 mb-4 text-2xl font-bold">
                            Follow Us
                        </h2>
                        <div className="flex space-x-4">
                            <Link
                                href="https://www.linkedin.com/in/anshroshan/ "
                                className="text-white hover:text-sky-400 "
                            >
                                {<RxLinkedinLogo size={30} />}
                            </Link>
                            <Link
                                href="https://github.com/AnshRoshan/"
                                className="text-white hover:text-sky-400"
                            >
                                {<RxGithubLogo size={30} />}
                            </Link>
                            <Link
                                href="https://www.instagram.com/anshroshan/"
                                className="text-white hover:text-sky-400"
                            >
                                {<RxInstagramLogo size={30} />}
                            </Link>
                            <Link
                                href="https://twitter.com/anshzero"
                                className="text-white hover:text-sky-400"
                            >
                                {<RxTwitterLogo size={30} />}
                            </Link>
                            <Link
                                href="https://discord.gg/Qm9dt5ma"
                                className="text-white hover:text-sky-400"
                            >
                                {<RxDiscordLogo size={30} />}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-600 pt-4 text-center">
                <p>&copy; 2024 Ansh Roshan. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
