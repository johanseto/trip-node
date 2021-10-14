const sharp = require('sharp')

//reduce an image and save it without deleting the original.
sharp('original.png').resize(80, 80).toFile('imagen_80x80.png');