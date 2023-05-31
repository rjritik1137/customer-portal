export type OnClick = (event: DivMouseEvent | DivKeyboardEvent) => void
export type DivMouseEvent = React.MouseEvent<HTMLDivElement>
export type DivKeyboardEvent = React.KeyboardEvent<HTMLDivElement>
export interface InteractiveComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onClick: OnClick
  children: React.ReactNode
}
