import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function DashboardParallaxBackground() {
    const ref = useRef(null);
    const { scrollY } = useScroll();

    // Smooth out the scroll value
    const smoothScrollY = useSpring(scrollY, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Parallax transformations for different layers
    const y1 = useTransform(smoothScrollY, [0, 500], [0, 150]);
    const y2 = useTransform(smoothScrollY, [0, 500], [0, -100]);
    const y3 = useTransform(smoothScrollY, [0, 500], [0, 50]);
    const rotate1 = useTransform(smoothScrollY, [0, 500], [0, 45]);
    const rotate2 = useTransform(smoothScrollY, [0, 500], [0, -30]);

    return (
        <div
            ref={ref}
            className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
            aria-hidden="true"
        >
            {/* Ambient Gradient Blobs */}
            <motion.div
                style={{ y: y1, rotate: rotate1 }}
                className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] rounded-full bg-primary/5 blur-[100px] opacity-70"
            />

            <motion.div
                style={{ y: y2, right: 0 }}
                className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-blue-500/5 blur-[100px] opacity-60"
            />

            <motion.div
                style={{ y: y3, rotate: rotate2 }}
                className="absolute bottom-[-10%] left-[20%] w-[45rem] h-[45rem] rounded-full bg-purple-500/5 blur-[120px] opacity-50"
            />

            {/* Subtle Floating Shapes for extra depth */}
            <motion.div
                style={{ y: y2 }}
                className="absolute top-[15%] right-[15%] w-24 h-24 rounded-2xl border border-primary/10 opacity-20 rotate-12"
            />
            <motion.div
                style={{ y: y1 }}
                className="absolute top-[45%] left-[10%] w-16 h-16 rounded-full border-2 border-dashed border-primary/10 opacity-20"
            />
        </div>
    );
}
