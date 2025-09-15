let string = '112211'


console.log(string.slice(1,-1))

function isPalindrome(str) {
    if(str.length <= 1) return true
    if(str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1,-1))
    } else {
        return false
    }
}
console.log(isPalindrome(string))
console.log(isPalindrome("A man a plan a canal Panama"))
console.log(isPalindrome("A man a plan a canal Panama"))