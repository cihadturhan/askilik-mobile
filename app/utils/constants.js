export const arrayOf = (times, generator) => {
  const result = []

  for (let i = 0; i < times; i += 1) {
    result.push(generator())
  }

  return result
}
