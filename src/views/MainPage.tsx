import React, { useEffect } from 'react'
import TabComponent from '../components/Tab/TabComponent'
import { useAppDispatch, useAppSelector } from '../stores/store'
import { fetchTabs } from '../stores/tabs.slice'

export default function MainPage() {
  const dispatch = useAppDispatch()
  const tabs = useAppSelector((state) => state.tabs.tabs)

  useEffect(() => {
    dispatch(fetchTabs())
  }, [dispatch])

  return (
    <div className="flex justify-center items-center min-h-screen h-full w-full">
      <TabComponent tabs={tabs} />
    </div>
  )
}
