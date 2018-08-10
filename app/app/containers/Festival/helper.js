export function formatDate(date) {
  const newDate = date.split('-')
  return [newDate[2],newDate[1],newDate[0]].join('.')
}
