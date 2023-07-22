import { LatLngExpression } from 'leaflet'
import { instance } from './instance'

export type GetTrackResponse = {
  code: string
  routes: Route[]
  waypoints: Point[]
}

type CommonRows = {
  weight: number
  duration: number
  distance: number
}

type Route = CommonRows & {
  geometry: string
  legs: Leg[]
  weight_name: string
}

type Leg = CommonRows & {
  steps: []
  summary: string
}

type Point = {
  hint: string
  distance: number
  name: string
  location: LatLngExpression
}

export const getTrack = async (routes: LatLngExpression[]) => {
  const coordinates = routes.join(';')
  const res = await instance.get<GetTrackResponse>(coordinates)
  return res.data
}
