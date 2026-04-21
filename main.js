
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

const athena = hailTheQueen("Athena Perez") // Argument value is "Athena Perez"
console.log(athena)

const charisse = hailTheQueen("Charisse Ford") // Argument value is "Charisse Ford"
console.log(charisse)

const jenna = hailTheQueen("Jenna Solis") // Argument value is "Jenna Solis"
console.log(jenna)

const ramona = hailTheQueen("Ramona Flowers")
console.log(ramona)

const monica = hailTheQueen("Monica Dinglehopper")
console.log(monica)
