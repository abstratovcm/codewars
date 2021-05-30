package spinwords

fun spinWords(sentence: String): String {
    val list = sentence.split(" ")
    var spin: String = ""
    for (word in list){
        if(word.length < 5)
            spin = spin.plus(word)
        else{
            for (c in word.length-1 downTo  0){
                spin = spin.plus(word[c])
            }
        }
        spin = spin.plus(" ")
    }
    spin = spin.substring(0..spin.length-2)
    return spin
}
