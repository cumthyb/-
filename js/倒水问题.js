function fn(maxA, maxB, target) {
  var cA = {
    max: maxA,
    value: 0,
    history: [0]
  };

  var cB = {
    max: maxB,
    value: 0,
    history: [0]
  };

  let vA = cA.value;
  let vB = cB.value;
  let tmpA = 0;
  while (vA !== target && vB !== target) {
    if (vA < maxA)
      cA.history.push(maxA)
    vA = maxA

    if (vA + vB > maxB) {
      cA.history.push((vA + vB) % maxB)
      cB.history.push(maxB)
      cB.history.push(0) // 水满 全倒掉
      cB.history.push(vA + vB - maxB) // 将A中剩余到给B
      cA.history.push(0)
      vB = vA + vB - maxB
      vA = 0
    }

    else {
      cB.history.push(vA + vB)
      cA.history.push(0)
      vB = vA + vB
      vA = 0
    }

    cA.value = vA
    cB.value = vB
  }

  return [cA, cB]
}

let res = fn(5, 7, 4)
console.log(res);