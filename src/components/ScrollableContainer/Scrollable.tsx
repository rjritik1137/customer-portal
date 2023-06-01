import React, { ReactElement } from 'react'
import './styles.css'

const Scrollable: React.FC<{
  children: ReactElement | null
  className?: string
}> = ({ children, className }) => {
  if (!children) return null
  return <div className={`scrollable-container ${className}`}>{children}</div>
}

Scrollable.displayName = 'Scrollable'

export default React.memo(Scrollable)
