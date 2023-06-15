// GET /report

import { MOCK_REPORT } from './mockData'

const query = {
  uuid: '',
  period: '', //by default 6 month
}

export const getReport = () => Promise.resolve(MOCK_REPORT)
