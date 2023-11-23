class Person { 
  #reg = /(\d{3})\d{4}(\d{4})/;
  #phone = null
  constructor() { 
 
  }

  get telNumber() { 
    let phone = this.#phone;
    phone = phone.replace(this.#reg, "$1****$2");
    // 返回结果
    return phone;
  }

  set telNumber(phone) { 
    this.#phone = /^1[3-9]\\d{9}$/.test(phone) ? (typeof phone === 'string') ? phone : String(phone) : '你传入了非法手机号！';
  }  
}