const Person = require('./person')
const Photo = require('./photo')

const mihri = new Person('Mihri', 35)
const gabriela = new Person('Gabriela', 36)
const gustavo = new Person('Gustavo', 30)

const berlinPhoto = new Photo('berlin.jpg')
const munichPhoto = new Photo('munich.jpg')

gabriela.addPhoto(berlinPhoto)
gabriela.addPhoto(munichPhoto)
gabriela.bio = 'Writing some code around here'

mihri.likePhoto(berlinPhoto)
gustavo.likePhoto(berlinPhoto)

// THE FIRST CONSOLE LOG, NOT NICE AS Markdown
// console.log(gabriela, gabriela.photos[0].likedBy)

console.log(gabriela.profile)

// THIS LINE WAS USED TO SHOW HOW SETTER WORKS
// console.log(gabriela.profile = 'new profile') // this will throw an error because profile is a getter not a setter
