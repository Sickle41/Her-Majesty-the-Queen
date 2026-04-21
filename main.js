const tributeChest = []

const payTribute = (id, description, queenId) => {
    const tributeObject = {
        id: id,
        description: description,
        queenId: queenId
    }
    tributeChest.push(tributeObject)
}

payTribute(1, "Gold", 1)
payTribute(2, "Incense", 2)
payTribute(3, "Spices", 3)
payTribute(4, "Silver", 4)
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

for (const queen of queens) {
    
    for (const tribute of tributeChest) {
       if (tribute.queenId === queen.id)
        console.log(`${queen.name} has tribute ${tribute.description}`)
    }
}