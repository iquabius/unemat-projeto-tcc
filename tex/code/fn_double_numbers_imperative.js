function doubleNumbers(numbers) {
  const doubled = []
  const l = numbers.length

  for (let i = 0; i < l; i++) {
    doubled.push(numbers[i] * 2)
  }

  return doubled
}
