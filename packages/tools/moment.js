const moment = require('moment')
const rightNow = moment()

// format a date
console.log(rightNow.format('MM/DD/YYYY HH:MM A')) // 04/11/2020 20:10 PM

// Validate a date
moment('2020-04-11').isValid() // Nos dara **true** o **false** dependiendo de si la fecha es valida o no

// calculate a time to now
moment('2018-04-11').fromNow() // Hace 2 años

// TO add or delete days or year
moment('2020-04-11').add(1, 'years') // 2021-04-11
moment('2020-04-11').subtract(1, 'years') // 2019-04-11