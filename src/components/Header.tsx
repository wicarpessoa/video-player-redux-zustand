import { useAppSelector } from "../store"
import { useCurrentLesson } from "../store/slices/player"

export  function Header() {
  const {currentModule ,currentLesson} = useAppSelector(state => {
    const {currentModuleIndex, currentLessonIndex} = state.player 
    const currentModule = state.player.course?.modules[currentModuleIndex]
    const currentLesson = currentModule?.lessons[currentLessonIndex]
    return {currentLesson, currentModule}

  })
  const isCourseLoading = useAppSelector(state=> state.player.isLoading)
  
  return (
    <div className='flex flex-col gap-1 flex-1'>
    {isCourseLoading ? (
      <>
        <div className="flex h-8 w-32 animate-pulse  bg-zinc-700 rounded-full "/>
        <div className="flex h-6 w-40 animate-pulse bg-zinc-700  rounded-full mt-2"/>
      </>
    ) :
    (
    <>
      <h1 className='text-2xl font-bold'>{currentLesson?.title}</h1>
      <span className='text-sm text-zinc-400'>Módulo {currentModule?.title}</span>
    </>
    )}
    </div>
  )
}
