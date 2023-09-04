

//ARRYA
let testString:(string)[];
testString=["a","b"];

//MIXED Array

let testStringOrNumberArray:(string|number)[];
testStringOrNumberArray=[1,"a",2,"b"];

//OBJECTS

let user={
    username:"john",
    age:22,
    isAdmin:false,

}

let userObj:{
    username:string,
    age:number,
    isAdmin:boolean
}

userObj={
    username:"john",
    age:23,
    isAdmin:false
}

let userObj2:{
    username:string,
    age:number,
    isAdmin:boolean
    phone?:string// ?-->means it is not mandetory
}

userObj2={
    username:"john",
    age:23,
    isAdmin:false
    
}

//ANY-->any type can have any data type we should use it when we or not sure of type

let testAny;

testAny=12;
testAny="heleo";
testAny=true;
testAny=[true];
testAny={}

let testAnyArray:any[];

testAnyArray=[1,"two",false,[]]

//functions

let sayHi=()=>{
    console.log("hi welcome");
}
type  function-name=():datatype=>{
    return datatype;
}
let functionReturnString=():string=>{
    return "string";
}

type function-name=(parameter:datatype):datatype=>{
    return datatype
}
let multiple=(num:number):number=>{
    return num*2
  }

let multiple=(num:number)=>{
  return num*2
}


let sum=(num1:number,num2:number,another?:number)=>{
    return num1+num2;
}

sum(2,3)

//functions where we get the objects us the parameter

let func=(user:{username:string,age:number,phone?:string})=>{
    console.log(user.username)
}

//TYPE ALIASES-->USED FOR CREATING THE CUSTOM TYPE

type UserType ={
    username:string;
    age:number;
    phone?:string, 
}

let betterFUNC=(user:UserType)=>{
    console.log(user.username)
}

let betterFUNC1=(user:UserType):UserType=>{
    console.log(user.username)
   return user;
}

// function signature-->using function signature we can create multiple functions

type myFunc=(a:number,b:string)=>void;

let write:myFunc=(c:number,d:string)=>{
    console.log("hii")
}
let write2:myFunc=(c,d)=>{
    console.log("hii")
}

type myFunc2=(a:number,b:number)=>number;

let write3:myFunc2=(c:number,d:number)=>{
    return c+d;
}
let write4:myFunc2=(c,d)=>{
    return c*d;
}

//INTERFACES -->IT JUST LIKE TYPE BUT ADVANCED VERSION

interface IUser{
    username:string;
    email:string;
    age:number;
}

interface IEmployee extends IUser {
    employeeId:number; 
}

const emp:IEmployee = {
    username: "tom",
    email: "tom@gmail.com",
    age: 12,
    employeeId:1,
}

const clinet:IUser={
    username:"tom",
    email:"tom@gmail.com",
    age: 12,
}

// GENERICS

interface IAuthor{
    id:number,
    username:string
}

interface ICategory{
    id:number,
    title:string
}



interface IPost{
    id:number;
    title:string;
    desc:string;
    extra:IAuthor[]|ICategory[];
}

//generic in action

interface IPostBetter<T>{
    id:number;
    title:string;
    desc:string;
    extra:T[]
}

const testMe : IPostBetter<String> = {
  id:1,
  title:"post title",
  desc:"post description",
  extra:["str1","str2"]
}

interface IPostEvenBetter <T extends object>{
    id:number;
    title:string;
    desc:string;
    extra:T[]
}

const testMe2:IPostBetter<{id:number,username:string}>={
    id:1,
    title:"post title",
    desc:"post description",
    extra:[{id:1,username:"praveen"},{id:2,username:"kavin"}]
}

interface IAuthor{
    id:number;
    username:string;
}

const testMe3:IPostEvenBetter<IAuthor>={
    id:1,
    title:"post title",
    desc:"post description",
    extra:[{id:1,username:"praveen"},{id:2,username:"kavin"}]
}

interface ICategory{
    id:number;
    title:string;
}

const testMe4:IPostEvenBetter<ICategory>={
    id:1,
    title:"post title",
    desc:"post description",
    extra:[{id:1,title:"praveen"},{id:2,title:"kavin"}]
}