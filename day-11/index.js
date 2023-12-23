function getIndexsForPalindrome(word) {
    if (word === word.split('').reverse().join('')) return [];

    for (let i = 0; i < word.length; i++) {
        for (let j = 1; j < word.length; j++) {
            if(i === j) continue;
            const newWord = word.split('').map((letter, index) => {
                if (index === i) return word[j];
                if (index === j) return word[i];
                return letter;
            }).join('');
            if (newWord === newWord.split('').reverse().join('')) return [i, j];
        }
    }

    return null;
}

console.log(getIndexsForPalindrome('anna')); // []
console.log(getIndexsForPalindrome('abab')); // [0, 1]
console.log(getIndexsForPalindrome('abac')); // null
console.log(getIndexsForPalindrome('aaaaaaaa')); // []
console.log(getIndexsForPalindrome('aaababa')); // [1, 3]
console.log(getIndexsForPalindrome('caababa')); // null