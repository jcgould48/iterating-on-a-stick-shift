const makeDino = function(species, period, carnivore, extinct=false) {
  return {
    species,
    period,
    carnivore,
    extinct,
  }
}

const makeSingular = function(dino) {
  if (!dino['species'].endsWith('us')) {
    return dino
  }
  else {
    return {
    species: dino['species'].slice(0,-2),
    period: dino['period'],
    carnivore: dino['carnivore'],
    extinct: dino['extinct'],
}
  }
}

const truncateSpecies = function() {
}

const makeExtinct = function() {

}

module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct
}