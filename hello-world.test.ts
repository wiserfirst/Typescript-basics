import { hello/*, add, minus, mul, divide*/ } from "./hello-world"

describe('Hello World', () => {
  it('says hello world with no name', () => {
    expect(hello()).toEqual('Hello, World!')
  })

  xit('says hello world to Alice', () => {
    expect(hello('Alice')).toEqual('Hello, Alice!')
  })

  xit('says hello world to Kenneth', () => {
    expect(hello('Kenneth')).toEqual('Hello, Kenneth!')
  })

})

describe('Calculator functions', () => {
  // it('adds two numbers', () => {
  //   expect(add(1, 3)).toEqual(4)
  //   expect(add(5, 8)).toEqual(13)
  // })

//   xit('substract one number from another', () => {
//     expect(minus(14, 8)).toEqual(6)
//     expect(minus(9, 5)).toEqual(4)
//   })

//   xit('multiples two numbers', () => {
//     expect(mul(2, 3)).toEqual(6)
//     expect(mul(5, 8)).toEqual(40)
//   })

//   xit('divides one number by another', () => {
//     expect(divide(14, 2)).toEqual(7)
//     expect(divide(18, 6)).toEqual(3)
//   })

})
