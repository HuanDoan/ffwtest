import * as _ from 'lodash'

const objKeysToCamelCase = (obj: any) => {
  return _.mapKeys(obj, (v, k) => _.camelCase(k))
}

export default objKeysToCamelCase
