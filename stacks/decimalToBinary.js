function Stack () {
  let items = []

  this.push = (element) => {
    items.push(element)
  }

  this.peek = () => {
    return items.pop()
  }

  this.isEmpty = () => {
    return (items.length === 0)
  }

  this.clear = () => {
    items = []
  }

  this.size = () => {
    return items.length
  }

  this.get = () => {
    return items
  }
}

function decimalToBinary (decimalNumber) {
  const stackRest = []
  let rest
  let binaryString = ''

  while (decimalNumber > 0) {
    rest = Math.floor(decimalNumber % 2)
    stackRest.push(rest)
    decimalNumber = Math.floor(decimalNumber / 2)
  }

  while (stackRest.length) {
    binaryString += stackRest.pop().toString()
  }

  return binaryString
}

const value = 100

console.log(`Decimal value: ${value}, binary value: ${decimalToBinary(value)}`)
