import { NoteCardHeader, NoteCardImage } from '@/components/NoteCard'
import { NoteCard } from '@/components/NoteCard'
import NoteHeader from '@/components/NoteHeader'
import { createFileRoute, Link } from '@tanstack/react-router'
import AnimatedLayout from '@haeram/components/AnimatedLayout'
import { AspectRatio } from '@haeram/ui/AspectRatio'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="flex h-screen flex-col">
      <AnimatedLayout>
        <NoteHeader />
        <div className="flex overflow-hidden">
          <CardColumn col={0} />
          <CardColumn col={1} />
          <CardColumn col={2} />
        </div>
      </AnimatedLayout>
    </div>
  )
}

function CardColumn({ col }: { col: number }) {
  const CARD_NUM = 15

  return (
    <motion.div
      className="flex flex-col justify-start gap-10 px-2 "
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        opacity: { duration: 6, ease: 'easeOut' },
        y: { duration: 2, ease: 'easeOut' },
      }}
    >
      <div className="flex flex-col justify-start gap-10 px-2 ">
        {Array.from({ length: CARD_NUM }).map((_, row) => {
          const index = col * CARD_NUM + row
          return (
            <Link
              to={`/detail/$id`}
              params={{ id: index.toString() }}
              key={index}
            >
              <RandomHeightCard
                index={index}
                src={`/default${`${Math.round(Math.random() * 6) + 1}`.padStart(2, '0')}.png`}
              />
            </Link>
          )
        })}
      </div>
    </motion.div>
  )
}

function RandomHeightCard({ index, src }: { index: number; src: string }) {
  return (
    <NoteCard
      index={index}
      className="bg-mono-200 tablet:w-40 tablet:rounded-2xl relative flex w-35 flex-col items-center justify-center rounded-lg"
    >
      <NoteCardHeader title={`Note ${index}`} id={index}></NoteCardHeader>
      <AspectRatio ratio={Math.random() * 1.1 + 0.7} className="absolute z-0">
        <NoteCardImage src={src} id={index} />
      </AspectRatio>
    </NoteCard>
  )
}
