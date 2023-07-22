import './App.css'

import { Map } from './components/map/Map'
import { RoutingList } from './components/table/RoutingList'
import { Spin } from 'antd'
import { routesSelectors } from './redux/routes'
import { useAppSelector } from './redux/hooks'

function App() {
  const isLoading = useAppSelector(routesSelectors.selectedIsLoading)
  return (
    <div className='App'>
      {isLoading && <Spin size='large' spinning className='spiner' />}

      <div>
        <RoutingList />
      </div>
      <div className='map-container'>
        <Map />
      </div>
    </div>
  )
}

export default App
