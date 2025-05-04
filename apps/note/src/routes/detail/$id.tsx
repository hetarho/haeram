import { createFileRoute } from '@tanstack/react-router'
import NoteHeader from '@/components/NoteHeader'
import { NoteCardImage } from '@/components/NoteCard'
import AnimatedLayout from '@haeram/components/AnimatedLayout'
export const Route = createFileRoute('/detail/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  const cardImage = `/default${`${(Number(id) % 3) + 1}`.padStart(2, '0')}.png`

  return (
    <div>
      <NoteHeader />
      <AnimatedLayout>
        <div className="flex h-screen flex-col items-center justify-center">
          <NoteCardImage src={cardImage} id={Number(id)} />
        </div>
      </AnimatedLayout>
    </div>
  )
}
