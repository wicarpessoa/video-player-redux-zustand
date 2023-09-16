import { useCurrentLesson, useStore } from "../zustand-store"

export  function Header() {
  const {currentModule, currentLesson} = useCurrentLesson()
   
  const isLoading = useStore(store=> store.isLoading)

  return (
    <div className='flex flex-col gap-1 flex-1'>
    {isLoading ? (
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
