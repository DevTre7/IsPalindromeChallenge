function isAPalindrome(word)
{
    let reverse = word.split("").reverse( ).join("");
    console.log(reverse);
    if(word === reverse){
        return true;
    }
    else
        return false;
}

console.log(isAPalindrome("joy"));
console.log(isAPalindrome("racecar"));

