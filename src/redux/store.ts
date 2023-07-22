import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from '@reduxjs/toolkit'
import routes, { sagaActions } from './routes'

import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { routesSagas } from './routes'
import { takeEvery } from 'redux-saga/effects'

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
  routes,
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

function* watcher() {
  yield takeEvery(sagaActions.GET_TRACK, routesSagas.getTrackSaga)
}

sagaMiddleware.run(watcher)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
