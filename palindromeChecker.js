let input = prompt("Check if a word is a palindrome! (Case Sensitive)");


if (typeof input === "string") {
    let newInput = "";
    let palindromeVer = "";
    for (i=0; i<input.length; i++) {
        if (input[i] === " ") {
            continue;
        } else {
            newInput = newInput + input[i];
        }
    }
    for (i=0; i<newInput.length; i++) {
        palindromeVer = palindromeVer + newInput[newInput.length-i-1];
    }
    if (newInput === palindromeVer) {
        console.log("This is a palindrome!");
    } else {
        console.log("This is not a palindrome.");
    }
    console.log(`Original: ${newInput} Reverse: ${palindromeVer}`)
} else {
    console.log("invalid input");
}