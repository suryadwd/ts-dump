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

enum UserRole {
    ADMIN = 'admin',
    USER = 'user'
}

UserRole.ADMIN // admin