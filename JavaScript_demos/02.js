class Fun { 
  constructor() { 
    const getTestValue = this.testFun()
    console.log(getTestValue);
  }
  testFun() { 
    return 'test Fun !'
  }
}

new Fun()