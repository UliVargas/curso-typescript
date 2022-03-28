(() => {
   interface addTwoNumbers {
    (a: number, b: number): number
  }

  let addNumbersFuction: addTwoNumbers

  addNumbersFuction = (a: number, b: number): number => {
     return 10
  }
})()