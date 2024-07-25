class Person {
  constructor(name, age) {
    ;(this.name = name), (this.age = age), (this.bio = ''), (this.photos = [])
  }

  greetEachOther(person) {
    console.log(`hello ${person.name}, this is ${this.name}.`)
  }

  addPhoto(photo) {
    this.photos.push(photo)
  }

  likePhoto(photo) {
    this.photos.push(photo)
    photo.likedBy.push(this)
  }

  get profile() {
    return `
      # ${this.name} is ${this.age} years old.
      Bio: ${this.bio}

      ## ${this.photos.length} photos:
      ${this.photos
        .map(photo => {
          return `
        ### ${photo.filename} ❤️ -> ${photo.likedBy.map(person => person.name).join(', ') || 'No toasts yet 😔'}
        `
        })
        .join('\n')}
      `
  }
  // THIS LINE WAS USED TO SHOW HOW SETTER WORKS on index.js that is why newValue is declared but never read.
  set profile(newValue) {
    throw new error('You cannot change the profile, profile is only a getter! Not possible to override it.')
  }
}

module.exports = Person
