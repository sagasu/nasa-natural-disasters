import Map from './components/map'
import Loader from './components/loader'
import {useState, useEffect} from 'react'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const {events} = await res.json();
      
      console.log(events);

      setEventData(events);
      setLoading(false);
    }

    fetchEvents();
    console.log(eventData);
  }, [])

  return (
    <div >
      {!loading ? <Map eventData={eventData} /> : <Loader/>}
    </div>
  );
}

export default App;
