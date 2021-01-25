# geohash-plus

Get Geohash from coordinates and vice versa plus calculate distances, mean, medium and see if a point is in a certain geohash.

`encode(x, y)`
// returns a geohash

`decode(hashstring)`
// returns x and y

`is_in(average, pos, hashstring)`
// fn is meant to be used with network latency coordinates
// average is average node (representative) vivaldi position of all nodes that claim to be in a certain geohash
// pos is a vivaldi position of node we want to check
// hashstring is a geohash string

`get_median(list)`
// returns median position of all the positions in the list array

`get_mean(list)
// returns mean position of all the positions in the list array

`get_dist(p1, p2)`
// returns distance between two positions

`get_geohash_dist`
// returns distance between two geohashes (in km)
