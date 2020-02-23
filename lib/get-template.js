const languages = require('./data/languages.json')
const languageIds = languages.map(language => language.id)

module.exports = languageId => {
  const language = languageIds.includes(languageId) ? languageId : 'en'
  const path = `./data/${language}/template.json`
  const template = require(path)
  return template
}
