"use strict";
//процедурный код
const name = "Vlad";
const age = 11;
function greet(name , age) {
    console.log(`${name} is ${age} years old`);
}

greet(name, age);

//Объекно ориентированный код
const user = {
    name: "Vlad",
    age: 11,
    greet(){
        console.log(`${this.name} is ${this.age} years old`);
    }

}
user.greet();
//Функции конструкторы
const User = function(name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(`${this.name} is ${this.age} years old`);
    }
}
//Все методы для объектов нужно записывать в свойства prototype функции конструктора
User.prototype.toShowName = function() {
    console.log(this.name);
}
const user1 = new User("Vlad", 11);
const user2 = new User("Vasya", 21);
user1.greet();
user2.greet();
user1.toShowName();
user2.toShowName();
console.log(user1);
console.log(user2);

//ES6 Class
class NewUser{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    toShowName(){
        console.log(this.name);
    }
};
const classUser = new NewUser("Masha", 14);
console.log(classUser);