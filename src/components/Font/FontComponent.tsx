import React, { memo } from 'react'
import Font from './Font'

export type FontComponentPropsType = {
  fonts: FontSelectionType[]
}

export default function FontComponent({ fonts }: FontComponentPropsType) {
  const MemoizedFont = memo(Font)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
      {fonts.map((font, index) => (
        <MemoizedFont
          index={index}
          id={font.id}
          label={font.label}
          color={font.color}
          colorBlindLabel={font.colorBlindLabel}
          abbr={font.abbr}
          key={font.id}
        />
      ))}
    </div>
  )
}
