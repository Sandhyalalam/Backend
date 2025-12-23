const fun1 = ()=>{
    return "Function one called";
    fun1();
}
const fun2 = ()=>{
    return "Function two called";
    fun2();
}
console.log(fun1());
console.log(fun2());