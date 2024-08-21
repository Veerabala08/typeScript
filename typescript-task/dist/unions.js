"use strict";
let score = 33;
score = 44;
score = "55";
let Balaa = { name: "Balaa", id: 334 };
Balaa = { username: "hc", id: 334 };
getDbId(3);
getDbId("3");
function getDbId(id) {
    // need to check 
    if (typeof id === "string") {
        id.toLowerCase();
    }
    // id.toLowerCase()
}
const data = [1, 2, 3];
const data2 = ["1", "2", "3"];
const data3 = ["1", "2", 3, true];
let seatAllotment;
seatAllotment = "aisle";
