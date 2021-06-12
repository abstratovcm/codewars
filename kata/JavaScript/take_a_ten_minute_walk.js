function isValidWalk(walk) {
  var v = 0, h = 0;
  for (i=0; i < walk.length; i++){
    switch(walk[i]){
    case 'n':
        v++;
        break;
    case 's':
        v--;
        break;
    case 'w':
        h++;
        break;
    case 'e':
        h--;
    }
  }
  return v == 0 && h == 0 && walk.length == 10
}
