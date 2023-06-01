export interface Customer {
  id: string
  name: string
  title: string
  address: string
  pictures: string[]
}

export interface CustomerCardProps {
  customer: Customer
  isSelected: boolean
  onClick: (id: Customer) => void
}

export interface CustomerDetailsProps {
  customer: Customer
}

export interface CustomerListProps {
  customersList: Array<Customer>
  selectedCustomerId: string
  onClick: (customer: Customer) => void
  observeNode: React.ForwardedRef<HTMLDivElement>
}
