import 'leaflet/dist/leaflet.css'

import { LayerGroup, MapContainer, Marker, Polyline, TileLayer } from "react-leaflet"

import { LatLngExpression } from "leaflet"
import { routesSelectors } from "../../redux/routes"
import { useAppSelector } from "../../redux/hooks"
import { useState } from 'react'

export const Map = () => {
    const polyline = useAppSelector(routesSelectors.selectedPolyline)
    const [center, setCenter] = useState<LatLngExpression>([45.04484, 38.97603])


    return (
        <MapContainer center={center} zoom={10}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {polyline && (
                <LayerGroup>
                    <Marker position={polyline[0]} />
                    <Marker position={polyline[polyline.length - 1]} />
                    <Polyline positions={polyline} />
                </LayerGroup>
            )}

        </MapContainer>
    )
}