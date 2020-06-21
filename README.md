[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# b5-at-a-glance

Short description of your big five score
## usage

Pass an object containing `language` and `scores` formatted like the one generated from [bigfive-calculate-score](https://github.com/Alheimsins/bigfive-calculate-score) and get a quick summary

```JavaScript
const summary = require('@alheimsins/b5-at-a-glance')
const data = {
  language: 'no',
  scores: {
    A: {
      score: 6,
      count: 2,
      result: 'neutral',
      facet: {
        '1': {
          score: 6,
          count: 2,
          result: 'neutral'
        }
      }
    },
    E: {
      score: 6,
      count: 2,
      result: 'neutral',
      facet: {
        '1': {
          score: 3,
          count: 1,
          result: 'neutral'
        },
        '2': {
          score: 3,
          count: 1,
          result: "neutral"
        }
      }
    }
  }
}

console.log(summary(data))

```

# License

[MIT](LICENSE)

# Related

- [bigfive-web](https://github.com/rubynor/bigfive-web) Website for five factor model of personality
- [bigfive-calculate-score](https://github.com/Alheimsins/bigfive-calculate-score) module for calculating score
- [b5-result-text](https://github.com/Alheimsins/b5-result-text) module for translating score to text

# About

Created with ❤ for [Alheimsins](https://alheimsins.net)

<img src="https://image.ibb.co/dPH08G/logo_black.png" height="150px" width="150px" />
