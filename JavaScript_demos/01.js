class Person { 
  age = null
  name = null
  #telNum = null
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  set tel(tel) {
    if (typeof tel === String) {
      return false
    } else { 
      this.telNum = tel.split('')
      return true
    }
    
  }

  get tel() { 
    return [...this.telNum].splice(0, 3).join('') + '****' + [...this.telNum].splice(-4).join('')
  }
}

const yj = new Person('袁晶', 18)

yj.tel = '12345678901'

console.log(yj.tel)
console.log(yj.telNum)