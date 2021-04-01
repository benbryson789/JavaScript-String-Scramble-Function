function StringScramble(str1, str2) {
    var calculate = {}
    str1.split('').forEach((j) => {
      calculate [j] = calculate [j] ? (calculate [j] += 1) : 1
    })
    return str2.split('').every((j) => {
      return calculate [j]--
    })
  }
  
  console.log(StringScramble( "cdore","coder"))//true
  console.log(StringScramble("h3llko","hello"))//false