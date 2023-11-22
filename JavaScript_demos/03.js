class Init { 
  constructor({ x, y}) { 
    console.log(`x: ${x}, y: ${y}`);
    fun()
  }

  fun() {
    console.log('测试一下')
  }
}

new Init({x: 100, y: 200})