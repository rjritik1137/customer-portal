import React, { useState, useCallback, Fragment, useRef } from 'react'
import './css/style.css'

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
  const { customers, hasMore, loading } = useCustomers(pageNumber)
  const observer = useRef<IntersectionObserver | null>(null)

  const observeNode = useCallback(
    (node: HTMLElement | null) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting)
          if (hasMore) setPageNumber((page) => page + 1)
      })
      if (node) observer.current.observe(node)
    },
    [loading, hasMore]
  )
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
            <Fragment>
              {/* <div> */}
              <CustomerList
                customersList={customers}
                selectedCustomerId={selectedCustomer?.id ?? '-1'}
                onClick={handleCardClick}
                observeNode={observeNode}
              />
              {/* </div> */}
              {loading && <p>Loading...</p>}
            </Fragment>
          </Scrollable>
        </div>
        <div className="right-container">
          <Scrollable>
            <Fragment>
              {selectedCustomer ? (
                <CustomerDetails customer={selectedCustomer} />
              ) : null}
            </Fragment>
          </Scrollable>
        </div>
      </div>
    </div>
  )
}

export default App
