import React from 'react'

const CustomerImage = ({ url, alt }: { url: string; alt: string }) => {
  return (
    <div className="customer-image-container">
      <img src={url} alt={`Pic ${alt + 1}`} className={'customer-image'} />
    </div>
  )
}

export default React.memo(CustomerImage)
