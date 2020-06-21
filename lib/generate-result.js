module.exports = (scores, template) => {
  return Object.keys(scores).reduce((accumulator, current) => {
    accumulator[current] = {}
    accumulator[current].text = template[current][scores[current].result]
    return accumulator
  }, {})
}
