var kittens = [ 'Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten() {
  return kittens.pop(name)
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift(name)
}

function appendKitten(name) {
  kittens.push(name)
  return kittens
}

function prependKitten(name) {
  return kittens.unshift(name)
}
function prependKitten() {
  return kittens.pop(name)
}

function removeLastKitten() {
  return kittens.shift(name)
}
