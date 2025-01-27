const makeDino = function(species, period, carnivore, extinct=false) {
  return {
    species,
    period,
    carnivore,
    extinct,
  }
}

const makeSingular = function(dino) {
  if (!dino.species.endsWith('us')) {
    return dino
  }
  else {
    return {
    species: dino.species.slice(0,-2),
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
}
  }
}

const truncateSpecies = function(dino) {
  if (dino.species.length<=7){
    return dino
  }
  else {
     const truncDino = {
    species: dino.species.slice(0,7) +'...',
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
}
return truncDino;
}
}

const makeExtinct = function(dino) {
  const extinctDino = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: true,
}
return extinctDino;
}

module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct
}