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
