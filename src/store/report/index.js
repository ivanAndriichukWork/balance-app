import { create } from 'zustand'
import { getReport } from '../../api/getReport'
import { normalizeReport, parseChildrenData } from './utils'
import { getDetailedData } from '../../api/getDetailedData'
import { getTransactions } from '../../api/getTransactions'

export const useReportStore = create((set, get) => ({
  dataRows: [],
  columns: [],
  tableColumns: [],
  expandedRows: [],
  banksRows: [],
  transactions: [],
  fetchReport: async () => {
    const response = await getReport()

    const dynamicColumns = ['name', ...Object.keys(response.banks)]
    const dynamicTableColumns = dynamicColumns.map((date) => ({
      title: date,
      dataIndex: date,
    }))

    set({
      report: response,
      dataRows: normalizeReport(response),
      columns: dynamicColumns,
      tableColumns: dynamicTableColumns,
    })
  },
  fetchDetailedData: async (dataKey) => {
    if (!dataKey) return
    const { data } = await getDetailedData(dataKey)

    const dataRows = get().dataRows
    const columnsKeys = Object.keys(dataRows[0])

    const banksRowsWithChildren = parseChildrenData({
      dataKey,
      data,
      columns: columnsKeys,
      dataRows,
    })
    set({ banksRows: banksRowsWithChildren })
  },
  fetchTransactions: async ({ category, month, value }) => {
    const { data } = await getTransactions({ category, month, value })
    set({ transactions: data.items })
  },
}))

export const getReportStore = (state) => state
