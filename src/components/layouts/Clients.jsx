import java from '../../assets/java.png';
import kfc from '../../assets/kfc.png';
import naivas from '../../assets/naivas.png';
import quickmart from '../../assets/quickmart.png';
import chandarana from '../../assets/chandarana.png';

function Clients() {
    return (
        <div className="mt-20 flex gap-10 items-center justify-center">
            <img src={naivas} alt="map" className="w-47 h-30" />
            <img src={java} alt="map" className="w-47 h-30" />
            <img src={quickmart} alt="map" className="w-47 h-30" />
            <img src={kfc} alt="map" className="w-47 h-40" />
            <img src={chandarana} alt="map" className="w-47 h-30" />
        </div>
    )
};

export default Clients;