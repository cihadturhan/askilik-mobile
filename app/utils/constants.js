export const arrayOf = (times, generator) => {
  const result = []

  for (let i = 0; i < times; ++i) {
    result.push(generator())
  }

  return result
}
