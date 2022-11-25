export interface Component3Props {
  text: string
  color?: string
}

export const Component3 = ({ text, color }: Component3Props) => {
  return <h1 style={{ color }}>{text}</h1>
}