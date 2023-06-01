import React, { useCallback, useEffect, useState } from 'react'
import { CustomerDetailsProps } from './types'
import axios from 'axios'
import CustomerImage from './CustomerImage'
type Pictures = Array<string>
const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [pictures, setPictures] = useState<Pictures>([])
  const fetchImages = useCallback(() => {
    axios
      .get(`http://localhost:3000/images/${customer.id}`)
      .then((response) => {
        const images: Array<{ url: string }> = response.data
        setPictures(() => {
          return images.map((item) => item.url)
        })
      })
  }, [customer.id])

  useEffect(() => {
    setPictures([])
  }, [customer.id])

  useEffect(() => {
    fetchImages()
    const interval = setInterval(() => {
      fetchImages()
    }, 10000)

    return () => clearInterval(interval)
  }, [fetchImages])

  return (
    <div className="customer-details-container">
      <h2>{customer.name}</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      <div className="photo-grid">
        {pictures.map((photo, index) => (
          <CustomerImage key={index} alt={index.toString()} url={photo} />
        ))}
      </div>
    </div>
  )
}
CustomerDetails.displayName = 'Customer Details'
export default React.memo(CustomerDetails)
