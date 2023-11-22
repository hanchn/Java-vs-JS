class Proto { 
  static testA = 'testA !'
  testB = 'testB !'
  constructor() { 

  }
}

console.log(Proto.testA)
// console.log(Proto.testB)
// TypeError: Cannot read property 'testB' of undefined
// new Proto.testA()
// TypeError: Proto.testA is not a constructor
console.log(new Proto().testB)



