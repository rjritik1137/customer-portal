export interface Customer {
  id: number
  name: string
  title: string
  address: string
  pictures: string[]
}

export interface CustomerDetailsProps {
  customer: Customer
}
