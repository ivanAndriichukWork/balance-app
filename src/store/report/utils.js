import { TABLE_ROWS, tableTemplate } from '../../helpers/constants'

const sortRows = (data, template) =>
  template.map((row) => data.find(({ key }) => key === row))

export const normalizeReport = (data) => {
  const categories = Object.keys(data)

  const newRows = categories.map((category) => {
    // Add each
    const item = { key: category, name: category }

    const dataByMonths = Object.entries(data[category])

    for (let i = 0; i < dataByMonths.length; i++) {
      item[dataByMonths[i][0]] = dataByMonths[i][1]
      item.name = category
    }

    return {
      ...item,
      children: [],
    }
  })

  const tableWithFixedRows = addNewRows(newRows, data)
  const result = sortRows(tableWithFixedRows, tableTemplate)
  return result
}

const addNewRows = (dataRows, data) => {
  // - Available starting balance
  const asb = {
    key: TABLE_ROWS['available-starting-balance'],
    name: 'Available starting balance',
  }
  // - Gross Profit = Income - COGS
  const gross = { key: TABLE_ROWS.gross, name: 'Gross Profit' }
  // - Net Income = Gross Profit - Expenses
  const net = { key: TABLE_ROWS['net-income'], name: 'Net Income' }

  const dataByMonths = Object.entries(data.banks)
  const incomesByMonths = Object.entries(data.income)
  const cogsByMonths = Object.entries(data.cogs)
  const expensesByMonths = Object.entries(data.expenses)

  for (let i = 0; i < dataByMonths.length; i++) {
    asb[dataByMonths[i][0]] = dataByMonths[i][1]
    gross[dataByMonths[i][0]] = incomesByMonths[i][1] - cogsByMonths[i][1]
    net[dataByMonths[i][0]] = gross[dataByMonths[i][0]] + expensesByMonths[i][1]
  }

  return [...dataRows, asb, gross, net]
}

export const parseChildrenData = ({ dataKey, data, columns, dataRows }) => {
  const rowChildren = dataRows.find(({ key }) => key === dataKey).children

  // Parse all date columns
  columns.forEach((column) => {
    const reportByMonth = data[column]
    if (!reportByMonth) return

    reportByMonth.forEach((item) => {
      const existingItem = rowChildren.find((child) => child.name === item.name)
      return existingItem
        ? // Concatenate data with the existing item
          Object.assign(existingItem, {
            [column]: item.total,
            key: item.uuid,
          })
        : // Add a new item to the rowChildren array
          rowChildren.push({
            [column]: item.total,
            name: item.name,
            key: item.uuid,
          })
    })
  })

  return [...dataRows]
}
