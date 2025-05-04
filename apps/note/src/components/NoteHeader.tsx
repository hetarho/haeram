import ThemeSwitch from './ThemeSwitch'
import { useMemo } from 'react'
import { NoteCardHeader } from './NoteCard'
import { useCanGoBack, useRouter } from '@tanstack/react-router'
import { Button } from '@haeram/ui/Button'
export default function NoteHeader() {
  const router = useRouter()
  const pathname = router.state.location.pathname
  const canGoBack = useCanGoBack()
  const isDetail = pathname.includes('/detail/')

  const title = useMemo(() => {
    if (isDetail) {
      const id = pathname.split('/').pop()
      return <NoteCardHeader title={`Note ${id}`} id={Number(id)} />
    } else {
      return 'HaeRam note'
    }
  }, [isDetail, pathname])

  return (
    <header className="flex items-center justify-between px-8 py-4 z-10">
      {isDetail && canGoBack && (
        <Button variant="ghost" size="sm" onClick={() => router.history.back()}>
          Back
        </Button>
      )}
      <h1 className="text-2xl font-bold">{title}</h1>
      <ThemeSwitch />
    </header>
  )
}
