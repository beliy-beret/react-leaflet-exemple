import 'leaflet/dist/leaflet.css'

import { MapContainer, TileLayer } from "react-leaflet"

import { LatLngExpression } from "leaflet"
import { Track } from './Track'
import { routesSelectors } from "../../redux/routes"
import { useAppSelector } from "../../redux/hooks"

export const Map = () => {
    const polyline = useAppSelector(routesSelectors.selectedPolyline)
    const center: LatLngExpression = [45.04484, 38.97603]


    return (
        <MapContainer center={center} zoom={10}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {polyline && <Track track={polyline} />}

        </MapContainer>
    )
}