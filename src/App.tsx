import React, { useState, useEffect } from 'react'
import './css/style.css'
import axios from 'axios'
import CustomerCard from './components/Customer/CustomerCard'
import CustomerDetails from './components/Customer/CustomerDetails'
import { Customer } from './components/Customer/types'

const App: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  )

  useEffect(() => {
    let cleanup = false
    axios
      .get('http://localhost:3000/user')
      .then((response) => {
        if (cleanup) return
        setCustomers(response.data)
      })
      .catch((e) => {
        if (cleanup) return
        console.log(e)
      })
    return () => {
      cleanup = true
    }
  }, [])

  const handleCardClick = (customer: Customer) => {
    setSelectedCustomer(customer)
  }

  return (
    <div className="app">
      <div className="customer-list scrollable-container">
        {customers.map((customer) => (
          <CustomerCard
            key={customer.id}
            customer={customer}
            selectedCustomerId={selectedCustomer?.id || -1}
            onClick={handleCardClick}
          />
        ))}
      </div>
      <div className="customer-details-container scrollable-container">
        {selectedCustomer ? (
          <CustomerDetails customer={selectedCustomer} />
        ) : null}
      </div>
    </div>
  )
}

export default App
