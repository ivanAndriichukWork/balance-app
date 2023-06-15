# Balance App

## Available Scripts

In the project directory:

1. Make sure if you have installed Node.js.
   Run `node -v`. You should see something like: `v16.20.0`
2. Run `npm install` to add all dependencies
3. Run `npm start`
   Runs the app in the development mode.\
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
   The page will reload when you make changes.
   You may also see any lint errors in the console.

## Notes

- TODO make UI more nice
- About modal window with transactions:
  by design, we make a new request each time when user click on cell. So I wrote a small randomizer to make it “more fun” to develop, as it takes a very long time to mock such an amount of data.

## API

```js
// REQUEST
`GET /report`
`const query: {
  uuid: '', // userId
}`
const response.data = {
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
    '01-2023': -200,
    '02-2023': -300,
    '03-2023': -400,
    '04-2023': -500,
    '05-2023': -600,
    '06-2023': -700,
  },
  expenses: {
    '01-2023': -1200,
    '02-2023': -1300,
    '03-2023': -1400,
    '04-2023': -1500,
    '05-2023': -1600,
    '06-2023': -1700,
  },
}
// Request
`GET /banks`
`GET /income`
`GET /cogs`
`GET /expenses`
`query: {
  uuid: '', // userId
  period: ['01-2023', '06-2023'],
}`
const response.data = {
  '01-2023': [
    {
      sourceId: '', //uuid
      total: 600,
      name: 'Source 1',
    },
    {
      sourceId: '',
      total: 400,
      name: 'Source 2',
    },
  ],
  '02-2023': [
    {
      sourceId: '',
      total: 1200,
      name: 'Source 1',
    },
    {
      sourceId: '',
      total: 800,
      name: 'Source 2',
    },
  ],
  '03-2023': [
    {
      sourceId: '',
      total: 1400,
      name: 'Source 1',
    },
    {
      sourceId: '',
      total: 1600,
      name: 'Source 2',
    },
  ],
}

// Request
`GET /transactions`
`query: {
  sourceId: '',
  month: ''
}`
const response.data = {
  items: [
    {
      uuid: '', // transactionId
      price: 1000,
      source: `Transaction name 1`,
      date: '23-05-2023',
    },
    {
      uuid: '',
      price: 2000,
      source: `Transaction name 2`,
      date: '24-05-2023',
    },
  ]
}

// Request
`POST /updateTransactions`
`body: {
  source: {
    sourceName: '', // better to add sourceId
    month: '05-2023',
  },
  transaction: {
    uuid: ''
  }
}`
```
