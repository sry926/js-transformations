function Main (input) {
  var data = input.split("\n")
  var n = parseInt(data[0])
  var v = data[1].split(' ')

  function max (start) {
    var object1 = {}
    for (var i = start; i < n; i = i + 2) {
      if (!object1[v[i]]) {
        object1[v[i]] = 0
      }
      object1[v[i]]++
    }

    var m = maxObj(object1)

    return [m, object1]
  }

  function maxObj (object1) {
    var m = null
    var max = 0
    for (var k in object1) {
      if (object1[k] > max) {
        max = object1[k]
        m = k
      }
    }

    return m
  }


  var m0d = max(0)
  var m0 = m0d[0]
  var m0o = m0d[1]

  var m1d = max(1)
  var m1 = m1d[0]
  var m1o = m1d[1]

  if (m0 === m1) {
    if (m0o[m0] > m1o[m1]) {
      delete m1o[m1]
      m1 = maxObj(m1o)
    } else {
      delete m0o[m0]
      m0 = maxObj(m0o)
    }
  }

  var c = 0;
  for (var i = 0; i < n; i = i + 2) {
    if (m0 != v[i]) {
      c++;
    }
  }

  for (var i = 1; i < n; i = i + 2) {
    if (m1 != v[i]) {
      c++;
    }
  }

  console.log(c);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));