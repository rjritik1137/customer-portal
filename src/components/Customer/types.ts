export interface Customer {
  id: string
  name: string
  title: string
  address: string
  pictures: string[]
}

export interface CustomerDetailsProps {
  customer: Customer
}
