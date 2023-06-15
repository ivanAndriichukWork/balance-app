import { useEffect } from 'react'
import styled from 'styled-components'
import { getReportStore, useReportStore } from '../../store/report'
import { TransactionCard } from './TransactionCard'

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
  &:hover {
    border: 2px solid black;
    box-shadow: 2px 2px 2px gray;
    font-weight: bold;
  }
`
const Title = styled.h3`
  font-size: 20px;
  color: #eac329;
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
