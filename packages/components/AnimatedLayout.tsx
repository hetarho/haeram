"use client";

import { AnimatePresence, motion } from "framer-motion";
import { pageVariants } from "../lib/motion";
import { useRouterState } from "@tanstack/react-router";

export default function AnimatedLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  console.log(pathname)

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={pageVariants}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
