"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let result;
result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const total:number = result.reduce((a,b)=>a+b,0); result is unknown so type error will come
const total = result.reduce((a, b) => a + b, 0);
console.log(total);
let Result;
Result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Total = Result.reduce((a, b) => a + b, 0);
console.log(Total);
// any has no type safety and unknow enforces type safety
// any operation can be performed on any type.
// unkown operation cannot be performed without any type checking.
// unknown used when handling data form api or databases.
const fetchData = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url);
    return response.json();
});
const showData = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = "ex.com ";
    const data = yield fetchData(url);
    data.map((item) => console.log(item.title));
});
showData();
