let result:unknown;
result = [1,2,3,4,5,6,7,8,9,10];
// const total:number = result.reduce((a,b)=>a+b,0); result is unknown so type error will come
const total:number = (result as number[]).reduce((a,b)=>a+b,0);
console.log(total);


let Result : any
Result = [1,2,3,4,5,6,7,8,9,10];
const Total : number = Result.reduce((a:number,b:number)=>a+b,0);
console.log(Total);

// any has no type safety and unknow enforces type safety
// any operation can be performed on any type.
// unkown operation cannot be performed without any type checking.
// unknown used when handling data form api or databases.

const fetchData = async (url:string):Promise<unknown> => {
  const response = await fetch(url);
  return response.json();
}

const showData = async ()=>{
    const url = "ex.com "
    const data = await fetchData(url);
    (data as {title:string, body:string, id:number}[]).map((item)=>console.log(item.title))
}

showData();