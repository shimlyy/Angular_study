var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
})();
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: 'wang', lastName: 'xiaomeng' };
console.log(greeter(user));
var student = new Student("jane", "M.", "User");
console.log(student);
document.body.innerHTML = JSON.stringify(greeter({
    firstName: "wang",
    lastName: "xiaomeng"
}));
