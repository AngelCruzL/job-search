function nextElementInList(list, value) {
  const currentValueIndex = list.indexOf(value)
  const nextValueIndex = (currentValueIndex + 1) % list.length
  return list[nextValueIndex]
}

export default nextElementInList
