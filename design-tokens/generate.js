const fs = require('fs')
const theo = require('theo')

theo
  .convert({
    transform: {
      type: 'web',
      file: './_design-tokens.yml'
    },
    format: {
      type: 'scss'
    }
  })
  .then(scss => {
    console.log(scss)
    // fs.writeFile('./design-tokens.scss', scss, (err) => {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log('The file was saved!')
    // })
  })
  .catch(error => console.log(`Something went wrong: ${error}`))
