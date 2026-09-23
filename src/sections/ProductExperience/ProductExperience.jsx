import { useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import ChevronLeft from '@mui/icons-material/ChevronLeft'
import ChevronRight from '@mui/icons-material/ChevronRight'
import { siteData } from '../../data/siteData'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import PhoneMock from '../../components/illustrations/PhoneMock'

export default function ProductExperience() {
  const scroller = useRef(null)
  const reduce = useReducedMotion()

  const move = (direction) => {
    scroller.current?.scrollBy({
      left: direction * 280,
      behavior: reduce ? 'auto' : 'smooth',
    })
  }

  return (
    <section className="section phones" id="experience">
      <div className="container">
        <div className="phones-head">
          <SectionHeading {...siteData.product} />
          <div className="phones-nav">
            <button type="button" onClick={() => move(-1)} aria-label="Previous screen">
              <ChevronLeft fontSize="small" />
            </button>
            <button type="button" onClick={() => move(1)} aria-label="Next screen">
              <ChevronRight fontSize="small" />
            </button>
          </div>
        </div>
        <div className="phone-scroller" ref={scroller} tabIndex={0} aria-label="Customer journey screens">
          {siteData.product.screens.map((screen) => (
            <PhoneMock key={screen.id} screen={screen} />
          ))}
        </div>
      </div>
    </section>
  )
}
