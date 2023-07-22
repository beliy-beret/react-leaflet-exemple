import type { RootState } from '../store'

const selectedRoutes = (state: RootState) => state.routes.routes
const selectedIsLoading = (state: RootState) => state.routes.isLoading
const selectedErrorMassage = (state: RootState) => state.routes.errorMessage
const selectedActiveRout = (state: RootState) => state.routes.activeRoute
const selectedPolyline = (state: RootState) => state.routes.polyline

export default {
  selectedActiveRout,
  selectedErrorMassage,
  selectedIsLoading,
  selectedPolyline,
  selectedRoutes,
}
