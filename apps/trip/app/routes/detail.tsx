import ThemeSwitch from "~/components/ThemeSwitch";
import type { Route } from "./+types/detail";
import { Link } from "react-router";
import { motion } from "framer-motion";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `haeram trip - ${params.title}` },
    { name: "description", content: "haeram trip" },
  ];
}

export default function Detail({ params: { title } }: Route.ComponentProps) {
  return (
    <div className="min-h-screen">
      <motion.div
        className="relative flex h-10 items-center justify-between w-full px-8 py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        <div>
          <Link to="/">Back</Link>
        </div>
        <ThemeSwitch />
      </motion.div>
      <div className="relative">
        <motion.img
          src="/nhatrang/01.jpeg"
          alt="nhatrang"
          className="w-full object-cover"
          initial={{ height: "100vh" }}
          animate={{ height: "13rem" }}
          transition={{
            duration: 3,
            ease: [0.6, 0.05, 0.01, 0.9],
          }}
        />

        <motion.div
          className="absolute top-0 left-0 "
          layoutId={`title-${title}`}
          initial={{
            top: "calc(50% - 10px)",
            left: "calc(50% - 10px)",
            fontSize: "2rem",
          }}
          animate={{
            top: "10px",
            left: "10px",
            fontSize: "3rem",
          }}
          transition={{
            duration: 3,
            ease: [0.6, 0.05, 0.01, 0.9],
          }}
        >
          <h1 className="text-l font-bold">{title}</h1>
        </motion.div>
      </div>
    </div>
  );
}
