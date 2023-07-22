import { GetTrackResponse, getTrack } from './../../API/routes'
import { call, put } from 'redux-saga/effects'

import type { GetTrack } from './actions'
import { LatLngExpression } from 'leaflet'
import actions from './actions'
import { isAxiosError } from 'axios'
import polyline from '@mapbox/polyline'

function* getTrackSaga(action: GetTrack) {
  try {
    yield put(actions.toggleIsLoading(true))
    const res: GetTrackResponse = yield call(getTrack, action.payload)
    const encodeLine: string = yield res.routes[0].geometry
    const track: LatLngExpression[] = yield polyline
      .decode(encodeLine)
      .map((coord) => [coord[1], coord[0]])
    yield put(actions.setPolyline(track))
  } catch (err) {
    if (isAxiosError(err)) {
      yield put(actions.setErrorMessage(err.message))
    } else {
      yield put(actions.setErrorMessage((err as Error).message))
    }
  } finally {
    yield put(actions.toggleIsLoading(false))
  }
}

export default { getTrackSaga }
