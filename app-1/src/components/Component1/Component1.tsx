export interface Component1Props {
  text: string
  color?: string
}

export const Component1 = ({ text, color }: Component1Props) => {
  return <h1 style={{ color }}>{text}</h1>
}