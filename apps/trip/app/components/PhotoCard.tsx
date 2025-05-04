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
      <motion.div
        layoutId={`title-${title}`}
        className="absolute bottom-2 right-4 select-none"
      >
        {title}
      </motion.div>
    </div>
  );
}
