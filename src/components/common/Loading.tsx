import React from 'react'
import { useAppSelector } from '../../stores/store'
import { selectLoading } from '../../stores/app.slice'

const Loading = () => {
  const isLoading = useAppSelector(selectLoading)
  return (
    <div
      className={`${
        !isLoading ? 'hidden' : ''
      } flex justify-center items-center h-screen w-screen opacity-80 fixed top-0 left-0 bg-sky-600`}
    >
      <div className="spinner" />
    </div>
  )
}

export default React.memo(Loading)
