export default number => {
  if (number == null) return NaN

  number = typeof number === 'string' ? parseFloat(number) : number

  return `R$ ${number
    .toFixed(2)
    .toString()
    .replace('.', ',')}`
}
