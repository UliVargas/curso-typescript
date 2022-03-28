(() => {
  const fullName = (fistName: string, lastName?: string): string => {
    return `${fistName} ${lastName || ''}`
  }
  const name = fullName('Tony')
  console.log({ name })
})()