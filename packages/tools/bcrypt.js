const bcrypt = require('bcrypt')

const password = '1235468746sure'

bcrypt.hash(password, 5, function(error, hash){
    console.log(hash)
    bcrypt.compare(password, hash, function(error, result){
        console.log(result)
        console.log(error)
    })
});

