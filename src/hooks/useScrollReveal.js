import { useEffect } from "react";
import { initScrollReveal } from "../utils/scrollReveal";

export function useScrollReveal() {
    useEffect(() => {
        const frame = requestAnimationFrame(initScrollReveal);
        return () => cancelAnimationFrame(frame);
    }, []);
}
