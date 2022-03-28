(() => {
  (() => {
    const fullName = (fistName: string, lastName?: string, upper: boolean = false): string => {
      if (upper) {
        return `${fistName} ${lastName || ''}`.toUpperCase()
      } else {
        return `${fistName} ${lastName || ''}`
      }
    }
    const name = fullName( 'Tony', '', true)
    console.log({ name })
  })()
})()