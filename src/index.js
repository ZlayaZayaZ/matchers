export default function sortHealth(arrHeroes) {
  arrHeroes.sort((a, b) => {
    if (a.health < b.health) {
      return 1;
    }
    if (a.health > b.health) {
      return -1;
    }

    return 0;
  });
  return arrHeroes;
}
