import { useEffect } from 'react'
import { useDrag } from 'react-dnd'
import styled from 'styled-components'
import { formatAmountInDollars } from '../../helpers/utils'
import { getReportStore, useReportStore } from '../../store/report'

const SidebarContainer = styled.div``
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`
const Close = styled.button`
  background: transparent;
  border: 1px solid black;
  border-radius: 50%;
  height: 30px;
  width: 30px;
`
const Title = styled.h3`
  font-size: 20px;
  color: #eac329;
`

const Transaction = styled.div`
  border: 1px solid black;
  margin-top: 4px;
  padding: 16px;
`
const Date = styled.p`
  margin: 0;
  font-size: 12px;
  color: grey;
`
const Name = styled.p`
  font-weight: bold;
`
const Price = styled.p`
  font-weight: bold;
  margin-left: 20px;
`

export const Content = ({ currentCell, setIsOpen, handleDragEnd }) => {
  const { fetchTransactions, transactions } = useReportStore(getReportStore)

  const { category, month, value } = currentCell

  useEffect(() => {
    if (!!currentCell.month) {
      // make API request
      fetchTransactions(currentCell)
    }
  }, [currentCell, fetchTransactions])

  return (
    <SidebarContainer>
      <Flex>
        <Title>{category}</Title>
        <Close onClick={() => setIsOpen(false)}>X</Close>
      </Flex>

      <Flex>
        <span>{month}</span>
        <span>${value}</span>
      </Flex>

      <p>{transactions.length} Transactions</p>
      {transactions.map((item) => (
        <TransactionCard key={item.uuid} {...{ item, handleDragEnd }} />
      ))}
    </SidebarContainer>
  )
}

const TransactionCard = ({ item, handleDragEnd }) => {
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
