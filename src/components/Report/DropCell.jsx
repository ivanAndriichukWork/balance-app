import { useDrop } from 'react-dnd'
import styled from 'styled-components'

const ClickableTd = styled.td`
  border: 1px solid #e0e0e0;
  padding: 18px 28px 18px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #e8e6db;
  }
`

export const DropCell = ({ onDrop, details }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'box',
    drop: () => onDrop(details),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))
  const isActive = canDrop && isOver
  let backgroundColor = '#ffffff'
  if (isActive) {
    backgroundColor = '#211ed2'
  } else if (canDrop) {
    backgroundColor = '#fafddc'
  }

  const { source, month, value } = details

  return (
    <ClickableTd
      ref={drop}
      style={{ backgroundColor }}
      {...{
        [`data-x`]: source,
        [`data-y`]: month,
      }}
    >
      {value}
    </ClickableTd>
  )
}
