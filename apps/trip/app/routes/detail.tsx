import ThemeSwitch from "~/components/ThemeSwitch";
import type { Route } from "./+types/detail";
import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";
import { cn } from "@haeram/lib/utils";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `haeram trip - ${params.title}` },
    { name: "description", content: "haeram trip" },
  ];
}

export default function Detail({ params: { title } }: Route.ComponentProps) {
  const location = useLocation();
  const image = new URLSearchParams(location.search).get("image");
  return (
    <div className="h-screen flex flex-col">
      <motion.div
        className="relative flex h-10 items-center justify-between w-full px-8 py-4 shrink-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        <div>
          <Link to="/">Back</Link>
        </div>
        <ThemeSwitch />
      </motion.div>
      <div className="relative flex-1">
        <motion.img
          src={image ?? ""}
          layoutId={`image-${image}`}
          alt={title}
          className="w-full object-cover"
          animate={{ height: "100%" }}
          initial={{ height: "20%" }}
          transition={{
            duration: 3,
            ease: [0.6, 0.05, 0.01, 0.9],
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full bg-primary-foreground/30"
        ></motion.div>
        <motion.div
          className="absolute top-0 left-0 whitespace-nowrap text-primary"
          animate={{
            top: "20px",
            left: "20px",
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
