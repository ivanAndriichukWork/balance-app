import { MOCK_DATA } from './mockData'

// GET /banks
// GET /income
// GET /cogs
// GET /expenses
const query = {
  uuid: '', // userId
  period: '', //by default 6 month
}
export const getDetailedData = (dataKey) => {
  const data = MOCK_DATA[dataKey]
  return Promise.resolve({ data })
}
