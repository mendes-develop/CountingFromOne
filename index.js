function monkeyCount(n, array = []) {
  for (let i = 1; i <= n; i++){
    array.push(i)
  }
  return array
}

monkeyCount(10)