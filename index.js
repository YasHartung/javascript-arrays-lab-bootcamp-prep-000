var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten (name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten (name) {

kittens.unshift(name)
return kittens
}

function destructivelyRemoveLastKitten () {
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten () {
  kittens.shift()
  return kittens
}


function appendKitten (name) {
  var appKittens = [name]

  return kittens.concat(appKittens)
}


function prependKitten (name) {
  var prepKitten = [name]

  return prepKitten.concat(kittens)
}

function removeLastKitten () {
  return kittens.slice(0, -1)
}