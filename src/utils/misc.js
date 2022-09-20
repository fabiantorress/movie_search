const formatDate = date =>
  new Intl.DateTimeFormat('en-DE', {year: 'numeric'}).format(
    date,
  )

export {formatDate}