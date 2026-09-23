import { motion, useReducedMotion } from 'framer-motion'

export default function NetworkVisual({ nodes }) {
  const reduce = useReducedMotion()
  return (
    <div className="network">
      <svg className="network-lines" viewBox="0 0 900 80" aria-hidden="true">
        <motion.path
          d="M70 40 H830"
          stroke="#FF6B35"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: reduce ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduce ? 0 : 1.4 }}
        />
      </svg>
      <ol>
        {nodes.map((node, index) => (
          <li key={node.id}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{node.label}</h3>
            <p>{node.text}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
