import React from 'react'
import FontComponent from '../Font/FontComponent'
import ResponseContentType from '../../constants'

interface TabContentProps {
  content?: ResponseData
}
export default function TabContent({ content }: TabContentProps) {
  return (
    <div className="tab-content p-4">
      {content?.type === ResponseContentType.FONT_SELECTION ? (
        <FontComponent fonts={(content.content as FontSelectionType[]) ?? []} />
      ) : (
        <div className="flex items-center justify-center">
          <div aria-labelledby="text-content">
            <span id="text-content">{(content?.content as string) ?? ''}</span>
          </div>
        </div>
      )}
    </div>
  )
}

TabContent.defaultProps = {
  content: {} as ResponseData,
}
