import { v4 } from 'uuid'

function getRandomDate(month) {
  if (!month) return
  const [mm, yyyy] = month.split('-')
  const randomDay = Math.floor(Math.random() * 28) + 1
  const date = new Date(`${yyyy}-${mm}-${randomDay}`)
  const formattedDate = date.toLocaleDateString('en-GB')
  return formattedDate
}

// value only for randomize
const createTransaction = (month, value) => {
  const id = v4()
  const min = 100
  const max = value / 2

  return {
    uuid: id,
    price: Math.floor(Math.random() * (max - min + 1)) + min,
    source: `Transaction ${id}`,
    date: getRandomDate(month),
  }
}

// From 2 to 10 random transactions
const getResponse = (month, value) => {
  const count = Math.floor(Math.random() * 9) + 2
  const items = []

  for (let i = 0; i < count; i++) {
    items.push(createTransaction(month, value))
  }

  return { items }
}

export const getTransactions = ({ category, month, value }) => {
  // GET /transactions
  const query = {
    category,
    month,
  }

  return Promise.resolve({ data: getResponse(month, value) })
}
