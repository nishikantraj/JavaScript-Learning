const user = {
    userName:"Nishikant",
    age: 34,
    greeting: function () {
        console.log(`${this.userName}`, "Welcome to javaScript.");
        console.log(this,"\n")
    }
};

// user.greeting()
// user.userName = "Sam";
// user.greeting()
// console.log(this)
const temp=()=> {
    let userName = "Nishikant";
    console.log(this);
}
// temp();
(function () {
    console.log("DB CONNECTED");
})();

    ((name) => { 
        console.log(`DB CONNECTED2,${name}`);
    })("Nishikant")