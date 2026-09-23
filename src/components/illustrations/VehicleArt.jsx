import { assets } from '../../data/assetData'

export default function VehicleArt({ type = 'bike' }) {
  const src = assets.vehicles[type] || assets.vehicles.bike
  return <img className="vehicle-art" src={src} alt="" />
}
