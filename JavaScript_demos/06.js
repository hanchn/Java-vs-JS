class PerClass { 
  constructor() { 

  }

  print(str) {
    console.log(str)
  }
}

class SonClass extends PerClass {
  constructor() { 
    super()
  }
}

let son = new SonClass()
son.print('Hello World !')