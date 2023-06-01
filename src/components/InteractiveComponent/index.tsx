import React from 'react'
import './style.css'
import {
  DivKeyboardEvent,
  DivMouseEvent,
  InteractiveComponentProps,
} from './types'

const InteractiveElement: React.ForwardRefRenderFunction<
  HTMLDivElement,
  InteractiveComponentProps
> = ({ onClick, children, className, ...rest }, ref) => {
  const handleClick = (event: DivMouseEvent) => {
    onClick && onClick(event)
  }

  const handleKeyDown = (event: DivKeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClick && onClick(event)
    }
  }

  return (
    <div
      className={`interactive-element ${className}`}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
}

export default React.forwardRef(InteractiveElement)
