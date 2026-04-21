
const queens = []

const createQueen = (queenId, queenName) => {
    const queenObject = {
        id:queenId, 
        name: queenName
    }

    queens.push(queenObject)
}

createQueen(1, "Trinity Terry")
createQueen(2, "Margaret Thatcher")
createQueen(3, "Dianna Ross")
createQueen(4, "Emily Prentiss")
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
