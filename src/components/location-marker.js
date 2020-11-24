import {Icon} from '@iconify/react'
import fireAlert from '@iconify/icons-mdi/fire-alert'
import storm from '@iconify/icons-mdi/weather-storm'

const LocationMarker = ({lat, lng, eventName, onClick}) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={eventName === 'storm' ? storm: fireAlert} className="location-icon"/>
        </div>
    )
}

export default LocationMarker
