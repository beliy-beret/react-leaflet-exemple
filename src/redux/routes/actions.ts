import { LatLngExpression } from 'leaflet'
import { Route } from './reducer'

const GET_TRACK = 'routes/getTrack'
export type GetTrack = {
  type: typeof GET_TRACK
  payload: LatLngExpression[]
}
const getTrack = (route: LatLngExpression[]): GetTrack => ({
  type: 'routes/getTrack',
  payload: route,
})

const SET_POLYLINE = 'routes/setPolyline'
type SetPolyline = {
  type: typeof SET_POLYLINE
  payload: LatLngExpression[]
}
const setPolyline = (polyline: LatLngExpression[]): SetPolyline => ({
  type: 'routes/setPolyline',
  payload: polyline,
})

const TOGGLE_IS_LOADING = 'routes/toggleIsLoading'
type ToggleIsLoading = {
  type: typeof TOGGLE_IS_LOADING
  payload: boolean
}
const toggleIsLoading = (isLoading: boolean): ToggleIsLoading => ({
  type: 'routes/toggleIsLoading',
  payload: isLoading,
})

const SET_ERROR_MESSAGE = 'routes/setErrorMessage'
type SetErrorMessage = {
  type: typeof SET_ERROR_MESSAGE
  payload: string
}
const setErrorMessage = (errorMessage: string): SetErrorMessage => ({
  type: 'routes/setErrorMessage',
  payload: errorMessage,
})

const SET_ACTIVE_ROUTE = 'routes/setActiveRoute'
type SetActiveRoute = {
  type: typeof SET_ACTIVE_ROUTE
  payload: Route
}
const setActiveRoute = (route: Route): SetActiveRoute => ({
  type: 'routes/setActiveRoute',
  payload: route,
})

export const sagaActions = {
  GET_TRACK,
}

export type RoutesAT =
  | GetTrack
  | SetPolyline
  | SetErrorMessage
  | ToggleIsLoading
  | SetActiveRoute

export default {
  getTrack,
  setPolyline,
  setErrorMessage,
  toggleIsLoading,
  setActiveRoute,
}
