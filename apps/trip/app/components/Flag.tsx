import type { Nation } from "~/types/nation";

export default function Flag({ nation }: { nation: Nation }) {
  return <img src={`/imgs/flags/${nation}.png`} alt={nation} />;
}
