import { LatLngExpression } from 'leaflet'
import { RoutesAT } from './actions'

export type Route = {
  name: string
  point_1: LatLngExpression
  point_2: LatLngExpression
  point_3: LatLngExpression
}

type RoutesInitialState = {
  isLoading: boolean
  errorMessage: string
  routes: Route[]
  activeRoute: Route | null
  polyline: LatLngExpression[] | null
}

const initialState: RoutesInitialState = {
  isLoading: false,
  errorMessage: '',
  routes: [
    {
      name: 'Маршрут 1',
      point_1: [45.018366, 38.988531],
      point_2: [45.038209, 39.007585],
      point_3: [45.05415, 38.986814],
    },
    {
      name: 'Маршрут 2',
      point_1: [45.018366, 38.988531],
      point_2: [45.004972, 39.032648],
      point_3: [45.035409, 39.052732],
    },
    {
      name: 'Маршрут 3',
      point_1: [45.018366, 38.988531],
      point_2: [45.005472, 38.966669],
      point_3: [44.977239, 38.947051],
    },
  ],
  activeRoute: null,
  polyline: null,
}

const reducer = (
  state: RoutesInitialState = initialState,
  action: RoutesAT
): RoutesInitialState => {
  switch (action.type) {
    case 'routes/setPolyline':
      return {
        ...state,
        polyline: action.payload,
      }
    case 'routes/setErrorMessage':
      return {
        ...state,
        errorMessage: action.payload,
      }
    case 'routes/toggleIsLoading':
      return {
        ...state,
        isLoading: action.payload,
      }
    case 'routes/setActiveRoute':
      return {
        ...state,
        activeRoute: action.payload,
      }
    default:
      return state
  }
}

export default reducer
