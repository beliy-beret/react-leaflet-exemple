import './index.css'

import App from './App.tsx'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { store } from './redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
)