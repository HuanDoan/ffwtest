import React from 'react'

export type FontPropsType = FontSelectionType & { index: number }

export default function Font({
  label,
  abbr,
  colorBlindLabel,
  color,
  index,
}: FontPropsType) {
  return (
    <button
      tabIndex={index}
      type="button"
      title={colorBlindLabel}
      className="font col-span-2 first:row-span-2 w-full flex justify-between items-center first:block"
    >
      <div className="w-fit wrapper border border-gray-400 rounded-md p-2">
        <div
          className="font__square w-20 h-20 relative"
          style={{ backgroundColor: color }}
          aria-label={`Square with color ${colorBlindLabel}`}
        >
          <span className="font__abbr absolute bottom-3 left-3 text-gray-200 opacity-50">
            {abbr}
          </span>
        </div>
      </div>
      <div className="font__text text-left w-full ml-5" aria-label={label}>
        <ul className="marker:text-gray-400 list-disc">
          <li>{label}</li>
        </ul>
      </div>
    </button>
  )
}
