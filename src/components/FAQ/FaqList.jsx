import { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Icon from '../Icon/Icon'

export default function FaqList({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <Accordion
          key={item.question}
          disableGutters
          elevation={0}
          expanded={open === index}
          onChange={() => setOpen(open === index ? -1 : index)}
          className="faq-item"
        >
          <AccordionSummary
            expandIcon={<Icon name="Add" />}
            aria-controls={`faq-${index}`}
            id={`faq-head-${index}`}
          >
            <h3>{item.question}</h3>
          </AccordionSummary>
          <AccordionDetails id={`faq-${index}`}>
            <p>{item.answer}</p>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
