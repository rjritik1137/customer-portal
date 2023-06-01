import React, { useState, useEffect, useCallback } from 'react'
import './css/style.css'
import axios from 'axios'
import CustomerDetails from './components/Customer/CustomerDetails'
import { Customer } from './components/Customer/types'
import Scrollable from './components/ScrollableContainer/Scrollable'
import CustomerList from './components/Customer/CustomerList'
import { APP_TITLE } from './constants/constant'
import { useCustomers } from './hooks/useCustomers'

const App: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  )
  const [pageNumber, setPageNumber] = useState(0)
  const { customers, hasMore, loading, error } = useCustomers(pageNumber)

  const handleCardClick = useCallback((customer: Customer) => {
    setSelectedCustomer(customer)
  }, [])

  return (
    <div className="app">
      <div className="title">
        <h1>{APP_TITLE}</h1>
      </div>
      <div className="flex-row">
        <div className="left-container">
          <Scrollable>
            <div>
              <CustomerList
                customersList={customers}
                selectedCustomerId={selectedCustomer?.id ?? '-1'}
                onClick={handleCardClick}
              />
            </div>
          </Scrollable>
        </div>
        <div className="right-container">
          <Scrollable>
            <div>
              {selectedCustomer ? (
                <CustomerDetails customer={selectedCustomer} />
              ) : null}
            </div>
          </Scrollable>
        </div>
      </div>
    </div>
  )
}

export default App
