import InteractiveElement from '../InteractiveComponent'
import { Customer } from './types'

interface CustomerCardProps {
  customer: Customer
  selectedCustomerId: number
  onClick: (id: Customer) => void
}

const CustomerCard: React.FC<CustomerCardProps> = ({
  customer,
  selectedCustomerId,
  onClick,
}) => {
  const handleClick = () => {
    onClick(customer)
  }

  return (
    <InteractiveElement
      className={`customer-card ${
        selectedCustomerId ? 'selected-customer-card' : ''
      }`}
      onClick={handleClick}
    >
      <h3>{customer.name}</h3>
      <p>{customer.title}</p>
    </InteractiveElement>
  )
}

export default CustomerCard
