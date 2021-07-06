function formatDuration (s) {
  var format = [31536000,86400,3600,60,1]
  arr = format.map(v => (t=v, v=~~(s/t), s%=t, v))
  
  names = [
    arr[0]? (arr[0] + ((arr[0]==1)? ' year':' years')):null,
    arr[1]? (arr[1] + ((arr[1]==1)? ' day':' days')):null,
    arr[2]? (arr[2] + ((arr[2]==1)? ' hour':' hours')):null,
    arr[3]? (arr[3] + ((arr[3]==1)? ' minute':' minutes')):null,
    arr[4]? (arr[4] + ((arr[4]==1)? ' second':' seconds')):null
  ]
  
  names = names.filter(e => e != null)
  
  switch(l = names.length) {
    case 0: return 'now'
    case 1: return names[0]
    case 2: return names.join(' and ')
    default: return names.slice(0,l-2).join(', ') + ', ' + names.slice(l-2,l).join(' and ')
  }
}

/*
A solution I liked:

function formatDuration (seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      res = [];

  if (seconds === 0) return 'now';
  
  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }
 
  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}
*/
