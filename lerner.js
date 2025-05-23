"use strict";
// typescript is a good and improved version of javascript with a lot of features
// npm installs typescript -g to install typescript globally in your system
// tsc lerner.ts to run the code and it will generate a lerner.js file
// a valid js code is always a valid ts code 
// tsc -init to create a tsconfig.json file which a set of rules 
// tsc --watch just like nodemon it will recomplie file when you make any changes in existing file
// a = 10
// b = 20
// a = a ^ b
// b = a ^ b
// a = a ^ b
// console.log(a, b) // 20 10
// types of data types in typescript
// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// they are didived into two categories
// primitive data types and reference data types
// if we use [] {} () then we will say that they are references data types
// Tuples
// const person: [string, number] = ['mohit', 21]  // we difine what type of data we are going to store in the array 
// enum 
// enum UserRole {
//     ADMIN = 'admin',
//     USER = 'user'
// }
// UserRole.ADMIN // admin
// Values type decleration in typescript 
//  -----> any, unknown, void, never, null, undefined
// 1. any - it is a super type of all the data types in typescript
// let a = 10     // number assign  
// let c ;  // any assign (iska matlab ke type script of off kr do )
// let a: unknown
// a = 12
// a = 'mohit'
// a.toUpperCase() // it will give error because we are not sure what type of data is stored in a
// if we want to use a as string then we have to do type assertion
// if(typeof a === 'string') {
//     console.log(a.toUpperCase()) // it will not give error
// }
// if a function is not returning anything then we can use void
// function abcd(): void {          //as it is not returning anything just printing we will say it is void
//     console.log('hello')
// }
// function cux(): number{          //as it is returning a number we will say it is number
//   return 10
// }
// Inference
// let a: number = 10                // we are telling ts that a is a number
// let b = 20                       // ts will infer(automatically) get the type of b as number
// Annotations
// let c: number;                   // this is callled annotation
// let a: number | string | boolean 
// Interfaces
// look at the senario now 
// for understanding scenario we will take a function which is taking two numbers and returning a number
function add(a, b) {
    // a.          we will get the function which are related to just number assume it as b as string we will get the function which are related to just string 
    return a + b;
}
// function getUserInfo(obj){
//   // obj.                // it will give no option because we are not sure what type of data is stored in obj
// }
// so we will create an interface which will define the structure of the object 
// interface User{
//   name: string,
//   password: number,
//   email: string
//   gender?: string // ? means it is optional if you will pass/not pass this will calling function no probem 
// }
// function getUserInfo(obj: User){
//   // obj.                // it will give optinon because we are sure what type of data is stored in obj
//   }
// while calling the function we will pass the object which is matching the interface as ts know now what things are available in the object 
// getUserInfo({
//   name: 'mohit',
//   password: 1234,
//   email: 'mohit@example.com'
// });
// interface User{
//   name: string,
//   password: number,
//   email: string
//   gender?: string // ? means it is optional if you will pass/not pass this will calling function no probem 
// }
// interface Admin extends User{
//   admin: boolean
// }
// if type is user you will get all the properties of user and if you are using admin you will get all the properties of admin along with user properties
// function getUserInfo(obj: Admin){
//   obj              
//   }
// Type aliases
// type sankya = number
// let a: sankya = 10     this will show number 
// let a: number | string    // this is caleed union type as ony one type of data will be passed at a time
//class & objects
// class Car{
//   public names: String;
//   public prices: number;
//   public color: string;
//   constructor( name: string, price: number, color: string){
//     this.names = name
//     this.prices = price
//     this.color = color
//   }
// }
// let car1 = new Car('audi', 100000, 'red')
// console.log(car1)
// function show(a: number, cb: () => void){
//   console.log(a)
// }
// cb() // this will call the function means cb takes a function and what it returns i had to write onn the right side and if it takes teh argumner i had to write on the left side
// show(2, () => {
//   console.log('hello')
// })
// function show1(a: number, cb: (v: number, k: number) => number){
//   console.log(a)
// }
// show1(2, (a: number, b: number) => {return a + b})
function abc(a) {
    console.log(a);
}
abc(10);
abc('mohit');
