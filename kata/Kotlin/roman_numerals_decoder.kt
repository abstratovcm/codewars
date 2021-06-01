package romannumerals

fun decode(str: String): Int {
    println("number $str")
    var numbers = IntArray(str.length) { i ->
        when(str[i]){
            'I'  -> 1
            'V'  -> 5
            'X'  -> 10
            'L'  -> 50
            'C'  -> 100
            'D'  -> 500
            else -> 1000
        }
    }
    return numbers.romanSum()
}

fun IntArray.romanSum() : Int{
    var i = 0; var sum = 0;
    while(i < this.size){
        if(i+1 < this.size && this[i] < this[i+1]){
            sum += this[i+1]-this[i]
            i += 2
        }
        else {sum += this[i]; i++}
    }
    return sum
}
