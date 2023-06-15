import { useDrag } from 'react-dnd'
import styled from 'styled-components'
import { formatAmountInDollars } from '../../helpers/utils'

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`
const Transaction = styled.div`
  border: 1px solid #f2f2f2;
  margin-top: 4px;
  padding: 16px;
  box-shadow: 4px 4px 4px #f2f2f2;
`
const Date = styled.p`
  margin: 0;
  font-size: 12px;
  color: grey;
`
const Name = styled.span`
  font-weight: bold;
`
const Price = styled.span`
  font-weight: bold;
  margin-left: 30px;
`

export const TransactionCard = ({ item, handleDragEnd }) => {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: 'box',
      item,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.9 : 1,
      }),
    }),
    [item]
  )

  return (
    <Transaction
      ref={dragRef}
      style={{ opacity }}
      key={item.uuid}
      onDragEnd={() => handleDragEnd(item)}
    >
      <Date>{item.date}</Date>
      <Flex>
        <Name>{item.source}</Name>
        <Price>{formatAmountInDollars(item.price, true)}</Price>
      </Flex>
    </Transaction>
  )
}
