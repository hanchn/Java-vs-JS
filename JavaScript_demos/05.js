class Example { 
  constructor() { 
    this.print()
  }

  static print(x) { 
    console.log('print ! x : ' + x);
  }
  print(x, y) { 
    console.log('print ! x: ' + x + ' y : ' + y);
  }

  print(x, y, z) { 
    console.log('print ! x: ' + x + ' y : ' + y + ' z : ' + z);
  }  
}

Example.print()
// Example.print is not a function
// Example.print()