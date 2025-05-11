import { AspectRatio } from "@haeram/ui/AspectRatio";
import { motion } from "framer-motion";
export default function PhotoCard({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <AspectRatio ratio={1}>
        <img src={src} alt="photo" className="object-cover w-full h-full" />
      </AspectRatio>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary-foreground/30 to-transparent"></div>
      <motion.div
        layoutId={`title-${title}`}
        className="absolute bottom-2 right-4 select-none text-primary text-l font-bold"
      >
        {title}
      </motion.div>
    </div>
  );
}
