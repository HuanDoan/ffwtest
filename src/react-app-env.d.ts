/// <reference types="react-scripts" />
declare type FontSelectionType = {
  id: number
  abbr: string
  color: string
  colorBlindLabel: string
  label: string
}

declare type ResponseData = {
  type: ResponseContentType
  content: FontSelectionType[] | string
}

declare type TabType = {
  id: number
  label: string
  contentEndpoint: string
}
