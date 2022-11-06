// algorithme de resolution de problem du Knapsack

export default function knapsack(objects, maxCapacity) {
  let nbObjects = objects.length;
  console.log(maxCapacity);
  let P = Array(nbObjects)
    .fill()
    .map(() => Array(maxCapacity).fill(0));
  for (let i = 1; i <= nbObjects - 1; i++) {
    for (let j = 1; j <= maxCapacity - 1; j++) {
      //   console.log(" I =", i, "J = ", j);
      let wi = Number(objects[i].weight);
      let vi = Number(objects[i].value);
      if (j < wi) {
        P[i][j] = P[i - 1][j];
      } else {
        P[i][j] = Math.max(P[i - 1][j], P[i - 1][j - wi] + vi);
      }
    }
  }
  return P;
}
