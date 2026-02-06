let input = prompt("Check if a word is a palindrome! (Case Sensitive)");


if (typeof input === "string") {
    let palindromeVer = "";
    for (i=0; i<input.length; i++) {
        palindromeVer = palindromeVer + input[input.length-i-1];
    }
    if (input === palindromeVer) {
        console.log("This is a palindrome!");
    } else {
        console.log("This is not a palindrome.");
    }
    console.log(`Original: ${input} Reverse: ${palindromeVer}`)
} else {
    console.log("invalid input");
}