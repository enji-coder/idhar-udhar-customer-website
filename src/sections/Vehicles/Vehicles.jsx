import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { siteData } from '../../data/siteData'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import VehicleArt from '../../components/illustrations/VehicleArt'

const GLOW = {
  bike: 'rgba(24, 182, 201, 0.45)',
  truck: 'rgba(255, 107, 53, 0.42)',
  'mini-truck': 'rgba(255, 183, 148, 0.5)',
  tempo: 'rgba(125, 211, 224, 0.42)',
  'large-tempo': 'rgba(255, 122, 77, 0.4)',
}

export default function Vehicles() {
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()
  const vehicle = siteData.vehicles[active]

  const selectVehicle = (index) => {
    const next = (index + siteData.vehicles.length) % siteData.vehicles.length
    setActive(next)
    document.getElementById(`tab-${siteData.vehicles[next].id}`)?.focus()
  }

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      selectVehicle(active + 1)
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      selectVehicle(active - 1)
    }
  }

  return (
    <section
      className="section fleet"
      id="vehicles"
      style={{ '--fleet': vehicle.tone, '--glow': GLOW[vehicle.id] || 'rgba(255,107,53,0.35)' }}
    >
      <div className="container">
        <SectionHeading {...siteData.vehiclesIntro} light />
        <div className="fleet-stage" id="vehicle-panel" role="tabpanel" aria-labelledby={`tab-${vehicle.id}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={vehicle.id}
              className="fleet-art"
              initial={reduce ? false : { opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {vehicle.image ? <img className="vehicle-photo" src={vehicle.image} alt="" /> : <VehicleArt type={vehicle.id} />}
            </motion.div>
          </AnimatePresence>
          <div className="fleet-copy">
            <p className="eyebrow">0{active + 1} / 0{siteData.vehicles.length}</p>
            <h3>{vehicle.name}</h3>
            <p>{vehicle.description}</p>
          </div>
        </div>
        <div className="fleet-picker" role="tablist" aria-label="Vehicles" onKeyDown={onKeyDown}>
          {siteData.vehicles.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={index === active}
              aria-controls="vehicle-panel"
              tabIndex={index === active ? 0 : -1}
              className={`vehicle-select${index === active ? ' is-active' : ''}`}
              onClick={() => setActive(index)}
            >
              <span className="vehicle-select-art" aria-hidden="true">
                {item.image ? <img src={item.image} alt="" /> : <VehicleArt type={item.id} />}
              </span>
              <strong>{item.name}</strong>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
