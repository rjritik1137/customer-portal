import React from 'react'
import { Customer } from './types'
import CustomerCard from './CustomerCard'

const CustomerList = (props: {
  customersList: Array<Customer>
  selectedCustomerId: string
  onClick: (customer: Customer) => void
}) => {
  const { customersList, selectedCustomerId, onClick } = props
  return (
    <React.Fragment>
      {customersList.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          isSelected={selectedCustomerId === customer.id}
          onClick={onClick}
        />
      ))}
    </React.Fragment>
  )
}

export default CustomerList
