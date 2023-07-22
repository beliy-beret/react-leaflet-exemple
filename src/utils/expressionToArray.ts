import { LatLngExpression } from 'leaflet'

export const expressionToArray = (exp: LatLngExpression) => {
  return exp.toString().split(',')
}
