const {tributeChest, queens} = require("./data.js")


/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/
const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

for (const queen of queens) {
    const hailMessage = hailTheQueen(queen.name)
    console.log(hailMessage)
}

for (const queen of queens) {
    
    for (const tribute of tributeChest) {
       if (tribute.queenId === queen.id)
        console.log(`${queen.name} has tribute ${tribute.description}`)
    }
}