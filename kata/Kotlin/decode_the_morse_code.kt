package morsecode

fun decodeMorse(code: String): String {
    val translation = StringBuilder()
    val letters = code.trim().split("  ", " ").toTypedArray()
    for (c in letters) translation.append(if (c == "") " "; else MorseCode[c])
    return translation.toString()
}
