import React, { useEffect, useState } from 'react'
import { CustomerDetailsProps } from './types'

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) =>
        prevIndex === customer.pictures.length - 1 ? 0 : prevIndex + 1
      )
    }, 10000)

    return () => clearInterval(interval)
  }, [customer.pictures.length])

  return (
    <div className="customer-details-container">
      <h2>{customer.name}</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      <div className="photo-grid">
        {customer.pictures.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Pic ${index + 1}`}
            className={index === currentPhotoIndex ? 'current' : ''}
          />
        ))}
      </div>
    </div>
  )
}
CustomerDetails.displayName = 'Customer Details'
export default React.memo(CustomerDetails)
