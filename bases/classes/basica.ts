(() => {
  class Avenger {
    //  private name: string
    //  private team: string
    //  public realName?: string
     static avgAge : number = 35
     static getAvgAge() {
        return this.avgAge
     }

     constructor(
      private name: string,
      private team: string,
      public realName?: string
     ) {}

     public bio () {
       return `${this.name} (${this.team})`
     }
  }

  const antman: Avenger = new Avenger('Antman', 'Captain', 'Scott Lang') 
  // console.log(antman)
  // console.log(Avenger.getAvgAge())
})()