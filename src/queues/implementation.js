function Queue () {
  const items = []

  this.enqueue = (element) => {
    items.push(element)
  }

  this.dequeue = () => {
    return items.shift()
  }

  this.front = () => {
    return items[0]
  }

  this.isEmpty = () => Boolean(!items.length)

  this.size = () => items.length

  this.get = () => {
    return items.toString()
  }
}

const queue = new Queue()

queue.enqueue(10)
console.log(queue.get())
