import React, { useCallback, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { ReportTable } from '../Report/Table'
import { Content } from './Content'

const Container = styled.div`
  display: flex;
  flex-grow: 1;
`

const Sidebar = styled.div`
  width: 10px;
  display: none;
  border: 1px solid #f2f2f2;
  transition: all 1s ease-in-out;
  padding: 0 16px;
  ${(props) =>
    props.isOpen &&
    css`
      width: 300px;
      display: block;
    `};
`

const MainContent = styled.div`
  flex-grow: 1;
  background-color: #ffffff;
`

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentCell, setCurrentCell] = useState({
    category: null,
    month: null,
  })
  const [source, setSource] = useState(null)
  const [transaction, setTransaction] = useState(null)

  useEffect(() => {
    if (source && transaction) {
      alert(`
      API Call 
      
      POST /updateTransactions

      body: {
        source: {
          sourceName: ${source.source},
          month: ${source.month},
        },
        transaction: {
          uuid: ${transaction.uuid}
        }
      }`)

      setSource(null)
      setTransaction(null)
    }
  }, [source, transaction])

  const toggleModal = ({ category, month }) => {
    setIsOpen(true)
    setCurrentCell({ category, month })
  }

  const handleDrop = (targetCell) => {
    setSource(targetCell)
  }

  const handleDragEnd = (transaction) => setTransaction(transaction)

  return (
    <Container>
      <MainContent>
        <ReportTable {...{ toggleModal, handleDrop }} />
      </MainContent>
      <Sidebar isOpen={isOpen}>
        <Content {...{ currentCell, setIsOpen, handleDragEnd }} />
      </Sidebar>
    </Container>
  )
}
