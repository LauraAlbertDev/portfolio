import { useMemo } from "react";
import { generateDots } from "./hero.constants";

export const BackgroundDecorations = () => {
    const dots = useMemo(() => generateDots(), []);

    return (
        <>
            <div className="absolute inset-0">
                <img src="/hero-bg.jpg" alt="" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-linear-to-b from-background/25 via-background/80 to-background" />
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {dots.map((dot, i) => (
                    <div
                        key={`dot-${i}`}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: dot.left,
                            top: dot.top,
                            animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
                            animationDelay: `${dot.delay}s`,
                        }}
                    />
                ))}
            </div>
        </>
    );
};