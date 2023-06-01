import React from 'react'
import { useImages } from '../../hooks/useImages'
import CustomerImage from './CustomerImage'
import { CustomerDetailsProps } from './types'

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const { pictures } = useImages(customer.id)

  return (
    <div className="customer-details-container">
      {/* <h2>{customer.name}</h2> */}
      {/* not displaying name in the details section as it's already there in the left panel */}
      <p>{customer.address}</p>
      <div className="center">
        <p>{customer.title}</p>

        <div className="photo-grid">
          {pictures.map((photo, index) => (
            <CustomerImage key={index} alt={index.toString()} url={photo} />
          ))}
        </div>
      </div>
    </div>
  )
}
CustomerDetails.displayName = 'Customer Details'
export default React.memo(CustomerDetails)
