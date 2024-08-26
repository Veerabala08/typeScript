let score: number | string = 33
score = 44
score = "55"


type iUser = {
    name: string;
    id: number
}

type iAdmin = {
    username: string;
    id: number
}

let Balaa: iUser | iAdmin = {name: "Balaa", id: 334}

Balaa = {username: "hc", id: 334}

getDbId(3)
getDbId("3")

function getDbId(id: number | string){
    // need to check 
    if (typeof id === "string") {
        id.toLowerCase()
    }
    // id.toLowerCase()
}

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = ["1", "2", 3, true]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"

