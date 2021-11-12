// Iteration 1: Names and Input

hacker1 = 'Bonnie'
console.log(`The driver's name is ${hacker1}`)

hacker2 = 'Clyde'
console.log(`The driver's name is ${hacker2}`)

// Iteration 2: Conditionals
let shorterName = ''

if (hacker1.length > hacker2.length) {
    shorterName = hacker2
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    shorterName = hacker1
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops
let newHacker1 = ''
for (let i=0; i < hacker1.length; i++) {
    newHacker1 += `${hacker1[i]} `
}
console.log(newHacker1.toUpperCase())

let newHacker2 = ''
for (let i=hacker2.length - 1; i>=0; i-- ) {
    newHacker2 += `${hacker2[i]}`
}
console.log(newHacker2)

console.log(hacker1.localeCompare(hacker2))

//comparing the lexicographic order

let result = ''
for (let i=0; i < shorterName.length; i++) {

    if (hacker1[i] > hacker2[i]) {
        result = `The driver's name goes first`
        break
    }
    if (hacker1[i] < hacker2[i]) {
        result = `Yo, the navigator goes first definitely.` 
        break
    }

    if (hacker1[i] === hacker2[i]) {
        result = `What? You both have the same name?`
    }
    
}
console.log(result)
    

// Bonus 1
// number of words in the text

let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis erat enim, vulputate imperdiet porta sed, bibendum sit amet nibh. In eleifend nunc a sem commodo, et maximus lorem faucibus. Nulla venenatis consequat molestie. Nullam mollis dignissim fringilla. Pellentesque at ipsum nec ligula volutpat posuere. Nullam scelerisque eros a condimentum maximus. Praesent convallis at lectus sit amet aliquam. Nunc gravida, lacus at gravida ultricies, diam diam convallis turpis, eu bibendum ipsum nulla sed massa. Aenean est ligula, sagittis vel placerat eget, vestibulum nec dui. Etiam feugiat viverra vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus arcu ex, tincidunt sed sapien in, vehicula ullamcorper velit. Quisque maximus sem diam, a posuere enim placerat et. Phasellus porttitor vitae risus sed mollis. Praesent vel eleifend erat. Nulla egestas odio libero, sit amet tempus tortor sodales non. Etiam fringilla leo ac diam laoreet aliquam. Nunc nec mollis erat, imperdiet placerat ante. Proin id turpis ut erat facilisis lacinia. Nam et neque sit amet eros tempor mollis tempus eu diam. Donec non lacus eu turpis aliquam cursus. Phasellus dui justo, sodales non metus sed, scelerisque vehicula lacus. Mauris lacinia sed nulla sed fringilla. Aliquam aliquet justo vel massa convallis, rhoncus imperdiet quam accumsan. Integer facilisis maximus lorem in elementum. Vestibulum rhoncus, urna pretium lobortis pulvinar, ligula orci accumsan magna, non tempor nibh purus nec nulla. Sed rutrum, ligula quis lobortis aliquet, lacus nunc lobortis eros, sed pharetra tellus nulla id risus. Vivamus semper scelerisque ante id fringilla. Maecenas ultrices dui elit, sit amet congue enim tempus in. Ut lobortis ultrices ex. Nam fringilla in justo quis imperdiet. Etiam mattis blandit orci ut suscipit. Praesent fringilla tempus metus et ornare.`

let numberOfWords = 1 //because the last word doesn't have a space after it
for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
        numberOfWords += 1
    }
}
console.log(`There are ${numberOfWords} words in the text.`)

// number of 'et' in the text

let numberOfEt = 0
let textLow = text.toLowerCase()

for (let i=0; i<text.length; i++) {
    if (text[i] === 'e' && text[i+1] === 't' && (text[i-1]=== ' ' || text[i-1] === '.' || text[i-1] === ',') && (text[i+2]=== ' ' || text[i+2] === '.' || text[i+2] === ',')) {
        numberOfEt += 1
    }
}
console.log(`'Et' appears ${numberOfEt} times in the text.`)

// Bonus 2

let phraseToCheck = `A man, a plan, a canal, Panama!`

function checkIfPalindrome(phraseToCheck) {
    let phraseLow = phraseToCheck.toLowerCase()
    strippedPhrase = ''
    for (let i=0; i < phraseLow.length; i++) {
        if (phraseLow[i] === ' ' || phraseLow[i] === ',' || phraseLow[i] === '.' || phraseLow[i] === '?' || phraseLow[i] === '!' || phraseLow[i] === `'`) {
            continue
        } else {
            strippedPhrase += phraseLow[i]
        }
    }
    let reversedPhrase = ''
    for (let i=strippedPhrase.length -1; i>=0; i--) {
        reversedPhrase += `${strippedPhrase[i]}`
    }

    if (strippedPhrase === reversedPhrase) {
        console.log(`Yay! This phrase is a palindrome!`)
    } else {
        console.log(`Drag, this phrase is not a palindrome :/`)
    }
}

checkIfPalindrome(phraseToCheck)