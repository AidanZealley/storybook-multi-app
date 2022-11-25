export interface Component2Props {
  text: string
  color?: string
}

export const Component2 = ({ text, color }: Component2Props) => {
  return <h1 style={{ color }}>{text}</h1>
}