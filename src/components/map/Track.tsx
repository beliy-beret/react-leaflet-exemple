import { LatLngExpression, LeafletEvent, LeafletEventHandlerFnMap, Polyline as PolylineTarget } from "leaflet"
import { LayerGroup, Marker, Polyline, useMap } from "react-leaflet"

import { FC } from "react"

type Props = {
    track: LatLngExpression[]
}

export const Track: FC<Props> = ({ track }) => {

    const map = useMap()

    const showTrack = (event: LeafletEvent) => {
        const polyline: PolylineTarget = event.target
        const center = polyline.getCenter()
        const bounds = polyline.getBounds()
        map.setView(center).fitBounds(bounds)
    }

    const eventHandlers: LeafletEventHandlerFnMap = {
        'add': showTrack
    }

    return (
        <LayerGroup>
            <Marker position={track[0]} />
            <Marker position={track[track.length - 1]} />
            <Polyline positions={track} eventHandlers={eventHandlers} />
        </LayerGroup>
    )
}
