EvenOdd(){
  if [ $(echo "$1 % 2" | bc) -eq 0 ];
  then echo "Even"
  else echo "Odd"
  fi
}

EvenOdd $1
