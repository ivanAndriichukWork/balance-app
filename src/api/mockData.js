import { v4 as uuidv4 } from 'uuid'
import { CATEGORIES } from '../helpers/constants'

export const MOCK_REPORT = {
  banks: {
    '01-2023': 1000,
    '02-2023': 2000,
    '03-2023': 3000,
    '04-2023': 4000,
    '05-2023': 5000,
    '06-2023': 6000,
  },
  income: {
    '01-2023': 100,
    '02-2023': 200,
    '03-2023': 300,
    '04-2023': 400,
    '05-2023': 500,
    '06-2023': 600,
  },
  cogs: {
    '01-2023': 12345,
    '02-2023': 12345,
    '03-2023': 12345,
    '04-2023': 12345,
    '05-2023': 12345,
    '06-2023': 12345,
  },
  expenses: {
    '01-2023': 0,
    '02-2023': 0,
    '03-2023': -3200,
    '04-2023': 0,
    '05-2023': -2770,
    '06-2023': -2910,
  },
}

const MOCK_BANKS = {
  '01-2023': [
    {
      uuid: uuidv4(),
      total: 600,
      name: 'Bank 1',
    },
    {
      uuid: uuidv4(),
      total: 400,
      name: 'Bank 2',
    },
  ],
  '02-2023': [
    {
      uuid: uuidv4(),
      total: 1200,
      name: 'Bank 1',
    },
    {
      uuid: uuidv4(),
      total: 800,
      name: 'Bank 2',
    },
  ],
  '03-2023': [
    {
      uuid: uuidv4(),
      total: 1400,
      name: 'Bank 1',
    },
    {
      uuid: uuidv4(),
      total: 1600,
      name: 'Bank 2',
    },
  ],
}
const MOCK_COGS = {
  '02-2023': [
    {
      uuid: uuidv4(),
      date: '10-06-2023',
      total: 80,
      name: 'COGS 1',
    },
    {
      uuid: uuidv4(),
      date: '15-06-2023',
      total: 120,
      name: 'COGS 2',
    },
  ],
  '03-2023': [
    {
      uuid: uuidv4(),
      date: '10-05-2023',
      total: 200,
      name: 'First Republic Savings',
    },
    {
      uuid: uuidv4(),
      date: '15-05-2023',
      total: 100,
      name: 'Chase Checking',
    },
  ],
  '04-2023': [
    {
      uuid: uuidv4(),
      date: '10-04-2023',
      total: 160,
      name: 'First Republic Savings',
    },
    {
      uuid: uuidv4(),
      date: '15-04-2023',
      total: 240,
      name: 'Chase Checking',
    },
  ],
}
const MOCK_EXPENSES = {
  '03-2023': [
    {
      uuid: uuidv4(),
      total: -1500,
      name: 'First Republic Savings',
    },
    {
      uuid: uuidv4(),
      total: -1700,
      name: 'Chase Checking',
    },
  ],
  '05-2023': [
    {
      uuid: uuidv4(),
      total: -1200,
      name: 'First Republic Savings',
    },
    {
      uuid: uuidv4(),
      total: -1570,
      name: 'Chase Checking',
    },
  ],
  '06-2023': [
    {
      uuid: uuidv4(),
      total: -1240,
      name: 'First Republic Savings',
    },
    {
      uuid: uuidv4(),
      total: -1670,
      name: 'Chase Checking',
    },
  ],
}
const MOCK_INCOME = {
  '02-2023': [
    {
      uuid: uuidv4(),
      total: 80,
      name: 'Income 1',
    },
    {
      uuid: uuidv4(),
      total: 120,
      name: 'Income 2',
    },
  ],
  '03-2023': [
    {
      uuid: uuidv4(),
      total: 160,
      name: 'Income 1',
    },
    {
      uuid: uuidv4(),
      total: 140,
      name: 'Income 2',
    },
  ],
  '04-2023': [
    {
      uuid: uuidv4(),
      total: 250,
      name: 'Income 1',
    },
    {
      uuid: uuidv4(),
      total: 150,
      name: 'Income 2',
    },
  ],
}

export const MOCK_DATA = {
  [CATEGORIES.banks]: MOCK_BANKS,
  [CATEGORIES.cogs]: MOCK_COGS,
  [CATEGORIES.expenses]: MOCK_EXPENSES,
  [CATEGORIES.income]: MOCK_INCOME,
}
