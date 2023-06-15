import { useEffect } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Modal } from './components/Modal'
import { CATEGORIES } from './helpers/constants'
import { getReportStore, useReportStore } from './store/report'

function App() {
  const { fetchReport, fetchDetailedData } = useReportStore(getReportStore)

  useEffect(() => {
    fetchReport()

    // this requests can be moved to handleRowClick
    fetchDetailedData(CATEGORIES.banks)
    fetchDetailedData(CATEGORIES.cogs)
    fetchDetailedData(CATEGORIES.expenses)
    fetchDetailedData(CATEGORIES.income)
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <Modal />
    </DndProvider>
  )
}

export default App
