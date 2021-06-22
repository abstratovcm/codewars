var number = function(busStops){
  var sum = 0;
  for (b of busStops) sum += b[0]-b[1];
  return sum;
}
/*
const number = busStops => busStops.reduce((total, [on, off]) => total + on - off, 0);
*/
