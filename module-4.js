//методы call apply
const user= {
    name:"Vlad",
    toShowName(){
        return this.name;
    }
}
console.log(user.toShowName);
const greeting = function(name, stars){
    //для методов call and apply
    console.log(`hello ${this.name}, ${name}-${stars} glad to see you!`);
}
greeting.call(user, "Hilton", 5);
greeting.apply(user, ["Hilton", 5]);
const a = greeting.bind(user, "Hilton", 5);
a();
//bind
const hello = function(cb){
    let userName = cb();
    console.log(`hello ${userName}`);
}
hello(user.toShowName.bind(user));