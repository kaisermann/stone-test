export default number => {
  if (number == null) return NaN

  return `R$ ${Number(number)
    .toFixed(2)
    .replace('.', ',')}`
}
