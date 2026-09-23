import VehicleArt from '../illustrations/VehicleArt'

export default function VehicleCard({ vehicle }) {
  return (
    <article className="vehicle-card">
      <div className="vehicle-card-art">
        {vehicle.image ? (
          <img src={vehicle.image} alt="" />
        ) : (
          <VehicleArt type={vehicle.id} />
        )}
      </div>
      <h3>{vehicle.name}</h3>
      <p>{vehicle.description}</p>
    </article>
  )
}
