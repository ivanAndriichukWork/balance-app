export const CATEGORIES = {
  banks: 'banks',
  cogs: 'cogs',
  expenses: 'expenses',
  income: 'income',
}

export const TABLE_ROWS = {
  banks: 'banks',
  'available-starting-balance': 'available-starting-balance',
  income: 'income',
  cogs: 'cogs',
  gross: 'gross',
  expenses: 'expenses',
  'net-income': 'net-income',
}

export const MAIN_ROWS = [
  'Available starting balance',
  'Gross Profit',
  'Net Income',
]

export const tableTemplate = Object.keys(TABLE_ROWS)
