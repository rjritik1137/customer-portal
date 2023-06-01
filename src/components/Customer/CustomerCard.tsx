import React from 'react'
import InteractiveElement from '../InteractiveComponent'
import { CustomerCardProps } from './types'

const CustomerCard: React.ForwardRefRenderFunction<
  HTMLDivElement,
  CustomerCardProps
> = ({ customer, isSelected, onClick }, ref) => {
  const handleClick = () => {
    onClick(customer)
  }

  return (
    <InteractiveElement
      className={`customer-card ${isSelected ? 'selected-customer-card' : ''}`}
      onClick={handleClick}
      ref={ref}
    >
      <h3>{customer.name}</h3>
      <p>{customer.title}</p>
    </InteractiveElement>
  )
}

export default React.memo(React.forwardRef(CustomerCard))
