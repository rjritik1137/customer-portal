import React, { useState, useEffect, useCallback } from 'react'
import './css/style.css'
import axios from 'axios'
import CustomerDetails from './components/Customer/CustomerDetails'
import { Customer } from './components/Customer/types'
import Scrollable from './components/ScrollableContainer/Scrollable'
import CustomerList from './components/Customer/CustomerList'

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

  const handleCardClick = useCallback((customer: Customer) => {
    setSelectedCustomer(customer)
  }, [])

  return (
    <div className="app">
      <Scrollable className="left-container">
        <div>
          <CustomerList
            customersList={customers}
            selectedCustomerId={selectedCustomer?.id ?? '-1'}
            onClick={handleCardClick}
          />
        </div>
      </Scrollable>
      <Scrollable className="right-container">
        <div>
          {selectedCustomer ? (
            <CustomerDetails customer={selectedCustomer} />
          ) : null}
        </div>
      </Scrollable>
    </div>
  )
}

export default App
