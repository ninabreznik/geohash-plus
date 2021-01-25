var geohash = require('ngeohash')
var GeohashDistance = require('geohash-distance')

module.exports = {
  is_in,
  get_median,
  get_mean,
  get_dist,
  get_geohash_dist,
  encode,
  decode
}

function is_in (average, pos, hashstring) {
  const { posX, posY } = pos
  const [ x1, y1, x2, y2 ] = geohash.decode_bbox(hashstring)
  const a = { x: x1, y: y1}
  const b = { x: x1, y: y2}
  const max_dist = get_dist(a,b) // @TODO
  if (get_dist(pos, average) <= max_dist) {
    return true
  } else {
    return false
  }
}

function decode (geohash) {
  return geohash.decode(geohash)
}

function encode (x, y) {
  return geohash.encode(x, y)
}

function get_geohash_dist (hash1, hash2) {
  return GeohashDistance.inKm(hash1, hash2)
}

function get_median (list) {
  const ds = []
  for (var i = 0, len = list.length; i < len; i++) {
    const p1 = list[i]
    var sum = 0
    for (var j = 0; j < len; j++) {
      if (i === j) continue
      const p2 = list[j]
      const d = get_dist(p1, p2)
      sum += d
    }
    ds[i] = sum
  }
  const [, idx] = ds.reduce(([a, k], b, i) => {
    return Math.min(a, b) === a ? [a, k] : [b, i]
  }, [])
  return list[idx]
}

function get_mean (list) {
  var meanX = 0
  var meanY = 0
  const len = list.length
  list.forEach(pos => {
    const { x, y } = pos
    meanX += x
    meanY += y
  })
  return { posX: meanX/len, posY: meanY/len }
}

// HELPER

function get_dist (p1, p2) {
  const { x: x1, y: y1 } = p1
  const { x: x2, y: y2 } = p2
  const a = Math.abs(x2 - x1)
  const b = Math.abs(y2 - y1)
  return Math.sqrt(a*a + b*b)
}
