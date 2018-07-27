export function sortByDate(a,b) {
  if (a.date.start < b.date.start)
    return -1;
  if (a.date.start > b.date.start)
    return 1;
  return 0;
}

export function getMonth(date) {
  return date.split('-')[1]
}

export function getMonthName(month) {
  const months = {
    '01': 'Januar',
    '02': 'Februar',
    '03': 'März',
    '04': 'April',
    '05': 'Mai',
    '06': 'Juni',
    '07': 'Juli',
    '08': 'August',
    '09': 'September',
    '10': 'Oktober',
    '11': 'November',
    '12': 'Dazember',
  }

  return months[month]
}

export function applyThreshold(festival, threshold) {
  const count = festival.artists.reduce((carry, artist) => {
    return carry + 2*artist.highlight + artist.similar
  }, 0)

  return count > threshold
}
