"use client";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { slideInFromTop } from "@/utils/motion";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Encryption = () => {
    const form: any = useRef();
    const [hovered, setHovered] = React.useState(false);

    const sendEmail = (e: any) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "anshcode",
                "temp_code",
                form.current,
                "uFpikehUSidg_HfOC"
            )
            .then(
                () => {
                    toast.success("Message Sent Successfully");
                },
                (error) => {
                    toast.error("Message Not Sent");
                }
            );
        e.target.reset();
    };

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative mx-auto flex h-[40rem] w-full flex-col items-center justify-center gap-4 overflow-hidden bg-black px-8 lg:flex-row"
        >
            {" "}
            <div
                className="relative flex h-full min-h-screen w-full flex-row items-center justify-center"
                id="contact"
            >
                <div className="absolute top-0 z-[5] h-auto w-auto">
                    <motion.div
                        variants={slideInFromTop}
                        className="text-center text-[40px] font-medium text-gray-200"
                    >
                        Connect with me.
                        <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                            {" "}
                            Your&apos;s{" "}
                        </span>
                        opinion matters.
                    </motion.div>
                </div>

                <div className="absolute top-[32%] z-[10] flex w-[40%] min-w-96 translate-y-[-50px] flex-col items-center justify-center text-white">
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="flex h-full w-full flex-col gap-2"
                    >
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            className="rounded-full border-2 bg-black/40 p-1 text-center"
                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="rounded-full  border-2 bg-black/40  p-1 text-center"
                        />
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                            className="rounded-full border-2 bg-black/40 p-1 px-4 text-center"
                        />
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                            className="h-36 rounded-md border-2 bg-black/40   p-2 text-justify"
                        ></textarea>
                        <button className="group flex h-auto w-auto cursor-pointer flex-col items-center rounded-full p-2">
                            <Image
                                src="/LockTop.png"
                                alt="Lock top"
                                width={50}
                                height={50}
                                className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
                            />
                            <Image
                                src="/LockMain.png"
                                alt="Lock Main"
                                width={70}
                                height={70}
                                className="z-10"
                            />
                        </button>
                    </form>
                    <ToastContainer
                        position="top-center"
                        theme="dark"
                        autoClose={1500}
                    />
                </div>

                <div className="absolute flex w-full items-start justify-center ">
                    {/* <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="false"
                    className="z-[-10] hidden h-auto w-full dark:block"
                    src="/encryption.webm/"
                /> */}
                </div>
            </div>
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 h-full w-full"
                    >
                        <CanvasRevealEffect
                            animationSpeed={5}
                            containerClassName="bg-transparent"
                            colors={[
                                [59, 130, 246],
                                [139, 92, 246],
                            ]}
                            opacities={[
                                0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1,
                            ]}
                            dotSize={2}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Radial gradient for the cute fade */}
            <div className="absolute inset-0 bg-black/50 [mask-image:radial-gradient(400px_at_center,white,transparent)] dark:bg-black/90" />
        </div>
    );
};

export default Encryption;
