import GoogleMapReact from 'google-map-react'
import LocationMarker from './location-marker'
const Map = ({eventData, center, zoom}) => {
    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8){
            return <LocationMarker lat={ev.geometries[0].coordinates[1]}
             lng={ev.geometries[0].coordinates[0]} eventName='fire' />
        }else if(ev.categories[0].id === 10){
            return <LocationMarker lat={ev.geometries[0].coordinates[1]}
             lng={ev.geometries[ev.geometries.length -1].coordinates[0]} eventName='storm' />
        }
        return null;
    })
    
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{key:
                'google-api-key-goes-here'}}
                defaultCenter={center}
                defaultZoom = {zoom}>
                    
                {markers}
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center:{
        lat:42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map
