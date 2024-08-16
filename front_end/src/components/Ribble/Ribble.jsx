import React from "react";

const Ripple = React.memo(function Ripple({
    mainCircleSize = 210,
    mainCircleOpacity = 0.7,
    numCircles = 8,
}) {
    return (
        <div className="-z-50 absolute inset-0 flex items-center justify-center bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]">
            {Array.from({ length: numCircles }, (_, i) => {
                const size = mainCircleSize + i * 70;
                const opacity = mainCircleOpacity - i * 0.03;
                const animationDelay = `${i * 0.06}s`;
                const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
                const borderOpacity = 5 + i * 5;

                return (
                    <div
                        key={i}
                        className={`absolute animate-ripple rounded-full bg-red shadow-xl border [--i:${i}]`}
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            opacity,
                            animationDelay,
                            borderStyle,
                            borderWidth: "1px",
                            borderColor: `hsl(var(--foreground), ${borderOpacity / 100})`,
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%) scale(1)",
                        }}
                    />
                );
            })}
        </div>
    );
});

Ripple.displayName = "Ripple";

export default Ripple;
