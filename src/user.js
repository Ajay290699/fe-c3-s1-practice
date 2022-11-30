//Define User class
var User = /** @class */ (function () {
    //constuctor 
    function User(userName, password, contactNo, emailID, address) {
        this.userName = userName;
        this.password = password;
        this.contactNo = contactNo;
        this.emailID = emailID;
        this.address = address;
    }
    return User;
}());
//Fetch form values using Object.fromentries()
var submitUser = function () {
    var myform1 = document.querySelector("form");
    var formData = new FormData(myform1);
    var p1 = new User(formData.get("username"), formData.get("password"), formData.get("contact"), formData.get("email"), formData.get("address"));
    registerUser(p1);
    return false;
    //call registerUser method with the constructed User object
};
//POST data using fetch() api
function registerUser(user) {
    var promise1 = fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify({
            user: user
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    });
    var promise2 = promise1.then(function (result) {
        return result.json();
    });
    promise2.then(function (finalResult) {
        console.log(finalResult);
    });
    alert("User added Successfully");
    return false;
}
//Dispay welcome message after successful registration
