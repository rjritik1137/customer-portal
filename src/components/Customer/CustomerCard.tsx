import React from 'react'
import InteractiveElement from '../InteractiveComponent'
import { Customer } from './types'

interface CustomerCardProps {
  customer: Customer
  isSelected: boolean
  onClick: (id: Customer) => void
}

const CustomerCard: React.FC<CustomerCardProps> = ({
  customer,
  isSelected,
  onClick,
}) => {
  const handleClick = () => {
    onClick(customer)
  }

  return (
    <InteractiveElement
      className={`customer-card ${isSelected ? 'selected-customer-card' : ''}`}
      onClick={handleClick}
    >
      <h3>{customer.name}</h3>
      <p>{customer.title}</p>
    </InteractiveElement>
  )
}

export default React.memo(CustomerCard)
