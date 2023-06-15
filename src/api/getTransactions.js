import { v4 } from 'uuid'

function getRandomDate(month) {
  if (!month) return
  const [mm, yyyy] = month.split('-')
  const randomDay = Math.floor(Math.random() * 28) + 1
  const date = new Date(`${yyyy}-${mm}-${randomDay}`)
  const formattedDate = date.toLocaleDateString('en-GB')
  return formattedDate
}

const createTransaction = (month) => {
  const id = v4()

  return {
    uuid: id,
    price: Math.floor(Math.random() * (9999 - 100 + 1)) + 100,
    source: `Transaction ${id}`,
    date: getRandomDate(month),
  }
}

// From 2 to 10 random transactions
const getResponse = (month) => {
  const count = Math.floor(Math.random() * 9) + 2
  const items = []

  for (let i = 0; i < count; i++) {
    items.push(createTransaction(month))
  }

  return { items }
}

export const getTransactions = ({ category, month }) => {
  // GET /transactions
  const query = {
    category,
    month,
  }

  return Promise.resolve({ data: getResponse(month) })
}
