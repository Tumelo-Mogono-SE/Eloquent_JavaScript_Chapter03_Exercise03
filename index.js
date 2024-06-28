// Chapter 03 Functions
// Exercise 03 Bean Counting

function countCharacter (string, character) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == character) count += 1;
    }
    return count;
}

function countB (string) {
    return countCharacter(string, "B");
}

console.log(countB("BBC"));
console.log(countCharacter("kakkkerlak", "k"));