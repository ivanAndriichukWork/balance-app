import { useState } from 'react'
import styled from 'styled-components'
import { getReportStore, useReportStore } from '../../store/report'
import { TableRow } from './TableRow'

const Table = styled.table`
  border-collapse: collapse;
  overflow: hidden;
  border: 1px solid #d3d3d3;
  background: #fefefe;
  width: 100%;
  -moz-border-radius: 5px; /* FF1+ */
  -webkit-border-radius: 5px; /* Saf3-4 */
  border-radius: 5px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`
const Thead = styled.thead`
  font-weight: bold;
  background-color: #f5f5f5;
`
const Tbody = styled.tbody`
  background-color: #ffffff;
`

const Tr = styled.tr`
  background: #f6f6f6;
`
const Th = styled.th`
  padding: 8px 16px;
`

export const ReportTable = ({ toggleModal, handleDrop }) => {
  const { columns, dataRows } = useReportStore(getReportStore)

  const [expandedRows, setExpandedRows] = useState([])

  const handleRowClick = (key) => {
    if (expandedRows.includes(key)) {
      setExpandedRows(expandedRows.filter((rowKey) => rowKey !== key))
    } else {
      setExpandedRows([...expandedRows, key])
    }
  }

  return (
    <Table>
      <Thead>
        <Tr>
          {columns.map((column) => (
            <Th key={column}>{column}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {dataRows.map((item) => (
          <TableRow
            key={item.key}
            {...{ item, handleDrop, toggleModal }}
            onClick={() => handleRowClick(item.key)}
            expanded={expandedRows.includes(item.key)}
          />
        ))}
      </Tbody>
    </Table>
  )
}
