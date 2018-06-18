export default {
  generateUID () {
    return Date.now()
  },
  sortAlphabeByName (array) {
    array.sort((a, b) => {
      let aNames = a.name.split(' ')
      let bNames = b.name.split(' ')
      var aLastName = aNames[aNames.length - 1].toUpperCase()
      var bLastName = bNames[bNames.length - 1].toUpperCase()
      return (aLastName < bLastName) ? -1 : (aLastName > bLastName) ? 1 : 0
    })
  }
}
