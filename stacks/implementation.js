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

const stack = new Stack()
const elements = [1, 2, 3, 4, 5]

elements.forEach(element => {
  stack.push(element)
})

console.log(stack.get().toString())
console.log(stack.size())
