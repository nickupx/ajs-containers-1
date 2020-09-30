export default function formatPhone(number) {
  const result = number.replace(/(-| |\(|\))/g, '').replace(/^8/, '+7')
  if (result.length >= 11) return result
  throw new Error('Short number')
}
