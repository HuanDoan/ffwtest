import React, { memo } from 'react'

interface TabProps {
  label: string
  isActive: boolean
  onClick: () => void
}

const Tab = memo(({ label, isActive, onClick }: TabProps) => {
  return (
    <div
      className={`tab ${
        isActive ? 'active' : ''
      } px-4 py-2 first:rounded-tl-lg font-medium text-sm text-gray-700 focus:outline-none border`}
      aria-labelledby={`tab-${label}`}
    >
      <button
        id={`tab-${label}`}
        title={label}
        type="button"
        onClick={onClick}
        aria-label={`Tab ${label}`}
      >
        {label}
      </button>
    </div>
  )
})
export default Tab
