import * as _ from 'lodash'
import apiService from './api.service'
import objKeysToCamelCase from '../utils/utils'
import ResponseContentType from '../constants'

export default {
  fetch: () => {
    return new Promise<Array<TabType>>((resolve) => {
      apiService.get('tabs').then((response) => {
        const result = _.map(response.data, (item) => objKeysToCamelCase(item))
        resolve(result as Array<TabType>)
      })
    })
  },
  get: (path: string) => {
    return new Promise<ResponseData>((resolve) => {
      apiService.get(path).then((response) => {
        const { type, content } = response.data

        if (type === ResponseContentType.TEXT) {
          resolve({
            type,
            content,
          } as ResponseData)
        }

        if (type === ResponseContentType.FONT_SELECTION) {
          const result = _.map(content, (item) => objKeysToCamelCase(item))

          resolve({
            type,
            content: result,
          } as ResponseData)
        }
      })
    })
  },
}
