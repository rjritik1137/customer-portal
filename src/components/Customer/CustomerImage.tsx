import React from 'react'
import InteractiveComponent from '../InteractiveComponent'

const CustomerImage = ({ url, alt }: { url: string; alt: string }) => {
  const onClick = () => {
    window.open(url)
  }
  return (
    <div className="customer-image-container">
      <InteractiveComponent
        className="customer-image-container"
        onClick={onClick}
      >
        <img src={url} alt={`Pic ${alt + 1}`} className={'customer-image'} />
      </InteractiveComponent>
    </div>
  )
}

export default React.memo(CustomerImage)
