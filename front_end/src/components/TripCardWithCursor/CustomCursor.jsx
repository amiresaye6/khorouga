import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CustomCursor = ({ isVisible }) => {
    const [position, setPosition] = useState({ x: -100, y: -100 });

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener("mousemove", mouseMove);

        return () => {
            document.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const cursorVariants = {
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.5 },
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed top-0 left-0 pointer-events-none z-50"
                    style={{
                        left: position.x,
                        top: position.y,
                    }}
                    variants={cursorVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                    <div className="relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="36px"
                            height="36px"
                            viewBox="0 0 24 24"
                            style={{ enableBackground: "new 0 0 512 512" }}
                            xmlSpace="preserve"
                            className="text-slate-900"
                        >
                            <defs>
                                <linearGradient
                                    id="a"
                                    x1="11.992"
                                    x2="11.992"
                                    y1="22.192"
                                    y2="1.803"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopOpacity="1" stopColor="#2bdada" offset="0"></stop>
                                    <stop stopOpacity="1" stopColor="#008080" offset="1"></stop>
                                </linearGradient>
                            </defs>
                            <g>
                                <path
                                    fill="url(#a)"
                                    d="m21.606 10.789-7.437 3.38-3.38 7.437a1 1 0 0 1-1.844-.055L1.875 3.166a1.007 1.007 0 0 1 1.292-1.291l18.385 7.07a1.006 1.006 0 0 1 .054 1.844z"
                                    opacity="1"
                                ></path>
                            </g>
                        </svg>
                        <div
                            className="pointer-events-none absolute rounded-full"
                            style={{
                                width: "100px",
                                height: "100px",
                                background: "rgba(64, 224, 208, 0.5)",
                                filter: "blur(50px)",
                                transform: "translate(-50%, -50%)",
                            }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CustomCursor
