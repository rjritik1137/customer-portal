import React from 'react'
import { CustomerListProps } from './types'
import CustomerCard from './CustomerCard'
import './styles.css'

const CustomerList = (props: CustomerListProps) => {
  const { customersList, selectedCustomerId, onClick } = props

  return (
    <React.Fragment>
      {customersList.map((customer, index) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          isSelected={selectedCustomerId === customer.id}
          onClick={onClick}
          ref={
            index == customersList.length - 1 ? props.observeNode : undefined
          }
        />
      ))}
    </React.Fragment>
  )
}

export default CustomerList
