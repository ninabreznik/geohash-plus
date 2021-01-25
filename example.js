const geohash = require('./index')

const pos1 = { x: 1, y: 1}
const geohash1 = geohash.encode(pos1.x, pos1.y)

const pos2 = { x: 155, y: 155}
const geohash2 = geohash.encode(pos2.x, pos2.y)

console.log({geohash1}, {geohash2})

const geohash_dist = geohash.get_geohash_dist(geohash1, geohash2)
const dist = geohash.get_dist(pos1, pos2)

console.log({geohash_dist, dist})

const mean = geohash.get_mean([pos1, pos2])
console.log({mean})
