export const formatAmountInDollars = (cents, withSign = false) => {
  const value = (cents / 100).toFixed(2)
  return withSign ? `$${value}` : value
}
