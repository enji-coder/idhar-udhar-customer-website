import { assets } from '../../data/assetData'

const AREAS = [
  { name: 'Gota', x: '16%', y: '22%' },
  { name: 'SG Highway', x: '18%', y: '48%' },
  { name: 'Bopal', x: '22%', y: '74%' },
  { name: 'Satellite', x: '40%', y: '58%' },
  { name: 'Navrangpura', x: '52%', y: '36%' },
  { name: 'Naroda', x: '74%', y: '24%' },
  { name: 'Maninagar', x: '70%', y: '70%' },
]

export default function CityMap() {
  return (
    <div className="city-map">
      <img src={assets.cityRoute} alt="Schematic of listed Ahmedabad areas, not a full coverage map" />
      <ul className="area-pins">
        {AREAS.map((area) => (
          <li key={area.name} style={{ left: area.x, top: area.y }}>
            {area.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
