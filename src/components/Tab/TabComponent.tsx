import React, { memo, useEffect } from 'react'
import Tab from './Tab'
import TabContent from './TabContent'
import { useAppDispatch, useAppSelector } from '../../stores/store'
import {
  activate,
  fetchTabContents,
  selectTabActive,
  selectTabContent,
} from '../../stores/tabs.slice'

interface TabComponentProps {
  tabs: Array<TabType>
}

export default function TabComponent({ tabs }: TabComponentProps) {
  const dispatch = useAppDispatch()
  const activeTab = useAppSelector(selectTabActive)
  const tabContent = useAppSelector(selectTabContent)

  useEffect(() => {
    if (activeTab.contentEndpoint) {
      dispatch(fetchTabContents(activeTab.contentEndpoint))
    }
  }, [dispatch, activeTab])

  const handleTabClick = (tab: TabType) => {
    if (tab !== activeTab) {
      dispatch(activate(tab))
    }
  }

  const MemoizedTab = memo(Tab)

  return (
    <div className="tab-component border border-gray-300 rounded-lg w-[600px] max-w-[80vw]">
      <div className="tab-component__header flex border-b">
        {tabs.map((tab, index) => (
          <MemoizedTab
            key={tab.id}
            label={tab.label}
            isActive={tab.id === activeTab.id}
            onClick={() => handleTabClick(tab)}
          />
        ))}
      </div>
      <TabContent content={tabContent} />
    </div>
  )
}
